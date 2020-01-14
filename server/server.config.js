module.exports = {
  apps: [
    {
      name: 'main',
      // 是否监听文件变动然后重启
      watch: ['main.js', 'routers', 'app'],
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
      script: './main.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
