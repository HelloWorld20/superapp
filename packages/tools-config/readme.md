# 配置中心

解析配置文件，读取配置文件的工具

## 使用方法

```javascript
import Config from 'ww-config';

const config = new Config(require('../config.json'));

const mongoName = config.get('mongo.name')

export default config;
```