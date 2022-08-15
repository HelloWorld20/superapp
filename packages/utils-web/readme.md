# 用于前端的工具函数

## 使用方法

### dev

如果有要开发此库的代码

  cd packages/uitls-web

  pnpm run dev

### build

  cd packages/uitls-web

  pnpm run build
 

## issue

 * 不知道为啥，直接在其他包引入源文件（.ts）则会报错，说没有对应的loader，所以需要tsc构建后，引用构建后的代码
