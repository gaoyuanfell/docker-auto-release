/**
 * 连接 redis
 */
import redisClient from 'redis';
import config from './config';
const redis = redisClient.createClient(config.redis);

redis
  .on('ready', () => {
    console.log('------------redis初始化成功------------');
  })
  .on('error', () => {
    console.log('------------redis初始化失败------------');
  });

export default redis;
