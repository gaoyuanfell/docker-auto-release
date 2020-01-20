/**
 * 连接 mysql
 */

const MysqlClient = require('mysql');
const config = require('./config');

const mysql = MysqlClient.createPool(config.mysql);

mysql.on('acquire', connection => {
  console.info('Connection %d acquired', connection.threadId);
});

mysql.on('connection', connection => {
  connection.query('SET SESSION auto_increment_increment=1');
});

mysql.on('enqueue', () => {
  console.log('Waiting for available connection slot');
});

mysql.on('release', connection => {
  console.log('Connection %d released', connection.threadId);
});

module.exports = mysql;
