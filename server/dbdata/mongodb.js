/**
 * 连接 mongodb
 */
const mongodb = require('mongodb').MongoClient;

const config = require('./config');

mongodb.connect(...config.mongodb, (err, db) => {
  if (err) throw err;
  console.log('------------mongodb初始化成功------------');
});

module.exports = mongodb;
