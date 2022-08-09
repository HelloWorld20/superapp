# React前端项目，看房dashboard

用于横向比较已经看过的小区的数据展示dashboard

## 使用方法

在包的跟目录下参考`example.config.json`新建文件`config.json`。按需修改配置

1. 本地开发

pnpm run dev

2. 打包生产代码

pnpm run build

代码生成在`dist`文件夹下

## todo

* webpack用到的依赖（如下），想办法自动安装。而不是写在此包的package.json中

"babel-loader": "^8.0.5",
"cache-loader": "^2.0.1",
"html-loader": "^0.5.5",
"thread-loader": "^2.1.2",
"ts-loader": "^5.3.3",
"typescript": "^4.7.4"
