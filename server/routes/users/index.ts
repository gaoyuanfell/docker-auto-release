import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';
const router = express.Router();

import mysqlPool from '../../dbdata/mysql';

const queryStr = fs.readFileSync(path.join(__dirname, 'insert.sql'));

router.get('/', (req, res, next) => {
  mysqlPool.getConnection((err, connection) => {
    connection.query(queryStr.toString(), (err, rows) => {
      res.json(rows);
    });
    connection.release();
  });
});

export default router;
