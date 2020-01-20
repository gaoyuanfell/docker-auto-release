const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

// const development = process.env.NODE_ENV === 'development';
// const mongodb = require('./dbdata/mongodb');
// const redis = require('./dbdata/redis');
// const mysql = require('./dbdata/mysql');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

/**
 * body-parser 中间件
 */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 解决跨域
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
