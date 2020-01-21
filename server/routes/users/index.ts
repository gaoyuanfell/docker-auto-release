import fs from 'fs';
import path from 'path';
import express from 'express';
import mysqlPool from '../../dbdata/mysql';
const router = express.Router();

const queryStr = fs.readFileSync(path.join(__dirname, 'insert.sql'));

router.get('/', (req, res, next) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      return;
    }
    connection.query(queryStr.toString(), (err, rows) => {
      res.json(rows);
    });
    connection.release();
  });
});

export default router;
