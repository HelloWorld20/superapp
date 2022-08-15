// 在此引入所有的询问试配置

const SAR = require("../packages/static-apart-radar/scripts/start");
const SWN = require("../packages/static-widget-notion/scripts/start");

const server = require("../packages/server-koa/scripts/start");

module.exports = {
  "static-apart-radar": {
    desc: '看房对比dashboard',
    name: 'static-apart-radar',
    component: SAR
  },
  "static-widget-notion": {
    desc: 'notion插件',
    name: 'static-widget-notion',
    component: SWN,
  },
  server: {
    desc: '统一server端',
    name: 'server',
    component: server
  },
};
