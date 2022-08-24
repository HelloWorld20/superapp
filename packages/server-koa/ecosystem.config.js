module.exports = {
  apps: [
    {
      name: 'server-koa',
      script: "dist/server-koa/src/index.js",
      interpreter: 'node',
      exec_mode: 'fork',
      instantces: 1,
      error: 'logs/server-koa/pm2-error.log',
      out: 'logs/server-koa/pm2-out.log',
      merge_logs: true
    }
  ]
}