import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';

const app = express();

// const development = process.env.NODE_ENV === 'development';
// const mongodb = require('./dbdata/mongodb');
// const redis = require('./dbdata/redis');
// const mysql = require('./dbdata/mysql');

import indexRouter from './routes/index';
import usersRouter from './routes/users';

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

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

export default app;
