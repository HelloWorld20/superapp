# 通用型工具函数

### dev

其他package安装此package

```shell
pnpm add @ww/utils-common -r --filter @ww/static-apart-radar
```

package 内引用即可

```javascript
import { loadScript } from '@ww/utils-web'
```

### build

  cd packages/uitls-web

  pnpm run build
 

## issue

 * 不知道为啥，直接在其他包引入源文件（.ts）则会报错，说没有对应的loader，所以需要tsc构建后，引用构建后的代码