# 上传腾讯cos对象存储工具

## 使用方法

1. 在需要的项目安装包`pnpm add @ww/tools-upload-cdn -r --filter @ww/static-apart-radar`
2. 在静态package项目配置文件添加cos配置

```JSON
"cos": {
    "name": "name",
    "SecretId": "SecretId",
    "SecretKey": "SecretKey",
    "Region": "ap-beijing",
    "Bucket": "name-1234567890"
}
```

3. 在静态package项目跟目录新建文件`upload.js`,且写入如下代码

```javascript
const path = require('path');
const Uploader = require('@ww/tools-upload-cdn');
const Config = require('@ww/tools-config').default;

const config = new Config(path.resolve(__dirname, './config.json'));

const uploader = new Uploader(path.resolve(__dirname, './dist'), config.get('cos'));

uploader.uploadFolder();
```

4. package.json里添加script：`"upload": "node upload.js"`, 然后需要上传时调用运行upload命令即可

## todo

* 支持其他对象存储如阿里云
* 改为ts，获得联想能力

