# superapp

基于pnpm workspace的monorepo: superapp，所有项目的综合项目



<!-- ## packages

* config: 配置中心
* framework: 基于express的后端框架以及工具函数
* server: 后端接口服务
* static-apart-radar: 广州看房dashboard
* tools-build: 基于webpack4的打包工具
* tools-upload-cdn: 上传cdn工具
* utils: 通用工具函数


## 运行

yarn start

询问试启动项目 -->

## 常用命令

1. 安装全局公用包

  pnpm add react react-dom -w

2. 安装到某个package

  pnpm add dayjs -r --filter @ww/utils-web

  pnpm add @ww/utils-web -r --filter @ww/static-apart-radar

后面跟的是包名称，也就是package.json的name参数

**-r是recursive的意思，递归的意思**

## todo

1. 目前static-\*\*类型package用tools-build-react时，需要在static-\*\*安装tools-build-react的依赖（打包依赖）。不知如何处理。如果在全局安装打包依赖，则破坏独立结构，或者需要cli来管理。


## issue

### 关于pnpm install 出现 unmet peer

[官方回答](https://github.com/pnpm/pnpm/issues/4183#issuecomment-1008252214)

解决方案按照意思应该是要根据提示安装一遍

* `unmet peer` shows up but project works. The declared peerDependency is installed but installed version doesn't match declared version, but luckily the installed version doesn't have break changes which would break the package declared peerDependency.
* `missing peer` shows up but project works.
  * your project is just using part of your dependency which doesn't require its peerDependency.
  * your environment have these peerDependency installed globally because node will look up dependency all the way to root (but pnpm don't know about it).