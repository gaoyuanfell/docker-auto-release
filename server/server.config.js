module.exports = {
  apps: [
    {
      // 指定解释器 1111111111
      // interpreter: './node_modules/.bin/ts-node',
      // 解释器参数 -P 表示项目路径，会自动使用项目的 tsconfig.json
      // interpreter_args: '-P ./ -r tsconfig-paths/register',
      name: 'app',
      // cwd: './',
      // 是否监听文件变动然后重启
      // watch: ['app.js', 'routers'],
      watch: false,
      // ignore_watch: ['node_modules'],
      // 不用监听的文件
      // ignore_watch: ['node_modules', 'logs', 'public'],
      // 错误日志文件
      error_file: './logs/app-err.log',
      // 正常日志文件
      out_file: './logs/app-out.log',
      merge_logs: true,
      // 应用运行少于时间被认为是异常启动
      min_uptime: '60s',
      // 最大异常重启次数，即小于min_uptime运行时间重启次数；
      max_restarts: 5,
      // 默认为true, 发生异常的情况下自动重启
      autorestart: true,
      script: './bin/www.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
