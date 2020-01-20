var express = require('express');
var router = express.Router();
const mysqlPool = require('../dbdata/mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mysqlPool.getConnection((err, connection) => {
    const queryStr = `SELECT * FROM t_user`;
    connection.query(queryStr, (err, rows) => {
      res.json(rows);
    });
    connection.release();
  });
});

module.exports = router;
