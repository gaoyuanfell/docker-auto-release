/**
 * 连接 redis
 */
const redisClient = require('redis');
const config = require('./config');
const redis = redisClient.createClient(config.redis);

redis
  .on('ready', () => {
    console.log('------------redis初始化成功------------');
  })
  .on('error', () => {
    console.log('------------redis初始化失败------------');
  });

module.exports = redis;
