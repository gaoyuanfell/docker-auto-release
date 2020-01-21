import { PoolConfig } from 'mysql';
console.info(process.env.NODE_ENV);
const production = process.env.NODE_ENV === 'production';

export default {
  mysql: {
    host: production ? 'mysql-moka' : 'localhost', // 线上采用匿名连接
    user: 'root',
    password: 'mysqlroot',
    port: '3306',
    database: 'moka',
    multipleStatements: true,
    connectionLimit: 10,
  } as any,
  redis: {
    host: production ? 'redis-moka' : 'localhost', // 线上采用匿名连接
    port: 6379,
  },
  mongodb: [
    production ? 'mongodb://mongo-moka/admin' : 'mongodb://localhost/admin',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  ] as Array<any>,
};
