/**
 * 连接 mongodb
 */

import * as mongodbClient from 'mongodb';

const mongodb = mongodbClient.MongoClient;

import config from './config';

mongodb.connect(config.mongodb[0], config.mongodb[1], (err, db) => {
  if (err) throw err;
  console.log('------------mongodb初始化成功------------');
});

module.exports = mongodb;
