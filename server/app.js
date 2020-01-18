const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

/**
 * 连接 redis
 */
const redis = require('redis');
const RedisClient = redis.createClient(6379, '127.0.0.1', {});
RedisClient.on('ready', () => {
  console.log('------------redis初始化成功------------');
});

/**
 * 连接 mongodb
 */
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(
  'mongodb://127.0.0.1/dockerApp',
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
  host: '127.0.0.1',
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

// mysqlConnection.query(`drop database moka1`);
// mysqlConnection.query(`create database moka default character set utf8 default collate utf8_general_ci;`);

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
