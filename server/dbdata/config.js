const development = process.env.NODE_ENV === 'development';

module.exports = {
  mysql: {
    host: development ? 'mysql-moka' : 'localhost', // 线上采用匿名连接
    user: 'root',
    password: 'mysqlroot',
    port: '3306',
    database: 'moka',
    multipleStatements: true,
    connectionLimit: 10,
  },
  redis: {
    host: development ? 'redis-moka' : 'localhost', // 线上采用匿名连接
    port: 6379,
  },
  mongodb: [
    development ? 'mongodb://mongo-moka/admin' : 'mongodb://localhost/admin',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  ],
};