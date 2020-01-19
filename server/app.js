const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

const development = process.env.NODE_ENV === 'development';

/**
 * 连接 redis
 */
const redis = require('redis');
const RedisClient = redis.createClient({
  host: development ? 'redis-moka' : 'localhost',
  port: 6379,
});
RedisClient.on('ready', () => {
  console.log('------------redis初始化成功------------');
}).on('error', () => {
  console.log('------------redis初始化失败------------');
});

/**
 * 连接 mongodb
 */
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(
  development ? 'mongodb://mongo-moka/admin' : 'mongodb://localhost/admin',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) throw err;
    console.log('------------mongodb初始化成功------------');
  }
);

/**
 * 连接 mysql
 */
const MysqlClient = require('mysql');
const mysqlConnection = MysqlClient.createConnection({
  host: development ? 'mysql-moka' : 'localhost',
  user: 'root',
  password: 'mysqlroot',
  port: '3306',
  database: 'moka',
  multipleStatements: true,
});

mysqlConnection.connect((err, result) => {
  if (err) {
    console.log('------------mysql初始化失败------------');
    return;
  }
  console.log('------------mysql初始化成功------------');
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

/**
 * body-parser 中间件
 */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
