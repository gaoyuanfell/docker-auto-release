const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

/**
 * 连接 redis
 */
const redis = require('redis');
const RedisClient = redis.createClient(6379, '127.0.0.1', {});
RedisClient.on('ready', () => {
  console.log('redis ready');
});


/**
 * 测试 redis
 */
RedisClient.set('love', '褚梦');
RedisClient.get('love', (err, reply) => {
  console.log(reply);
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
    console.log('------------数据库初始化成功------------');
    let database = db.db('dockerApp');
    database.createCollection('user', function(err, res) {
      if (err) throw err;
      console.log('------------集合初始化完毕------------');
      // db.close();
    });

    database.createCollection('auth', function(err, res) {
      if (err) throw err;
      console.log('------------集合初始化完毕------------');
      // db.close();
    });
  }
);

const userRouter = require('./routers/user.js');

const app = express();

/**
 * body-parser 中间件
 */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);
// app.use(express.static(path.join(__dirname, 'public')));
// 表示现在 你就可以通过带有“/static ”前缀的地址来访问public目录下面的文件了
app.use('/static', express.static('public'));
app.get('/', (req, res) => {
  res.send(`
    <a href="dowm" target="_black">dowm</a>
  `);
});

app.get('/dowm', (req, res) => {
  res.download(path.join(__dirname, 'public/1.txt'));
});

app.use('/user', userRouter);

app.use((req, res) => {
  res.status(200).send('这个是404 没有路由匹配到！');
});

app.listen(app.get('port'), () => {
  console.log(`Express started on http://localhost:${app.get('port')} press Ctrl-C to terminate.`);
});
