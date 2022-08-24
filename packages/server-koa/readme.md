# 通用服务端项目

基于koa2的服务端项目，各类curd接口定义于此。支持连接redis、mongodb

## 使用方法

在包的跟目录下参考`example.config.json`新建文件`config.json`。按需修改配置

1. 本地开发

pnpm run dev

2. 打包生产代码

pnpm run build

代码生成在`dist`文件夹下

3. 部署

切换到当前目录下

  cd packages/server-koa

打包

pnpm run build

配置config文件

```shell
  cp example.config.json ./dist/server-koa/config.json

  vim config.json
```

启动pm2

  pm2 start


## todo

* 支持redis
* 添加命令式启动