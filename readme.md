# superapp

基于pnpm workspace的monorepo: superapp，所有项目的综合项目



<!-- ## packages

* config: 配置中心
* framework: 基于express的后端框架以及工具函数
* server: 后端接口服务
* template-apart-radar: 广州看房dashboard
* tools-build: 基于webpack4的打包工具
* tools-upload-cdn: 上传cdn工具
* utils: 通用工具函数


## 运行

yarn start

询问试启动项目 -->

## 常用命令

1. 安装全局公用包

  pnpm install react react-dom -w

2. 安装到某个package

  pnpm i dayjs -r --filter @ww/utils-web

  pnpm install @ww/utils-web -r --filter @ww/template-apart-radar

后面跟的是包名称，也就是package.json的name参数

