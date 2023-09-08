# 使用 father 和 dumi 开发 react 组建库 reactUI

### 使用

npm i hzlzh-react-ui

### 记录

- father 负责组建库源码的构建，dumi 负责组件的开发和文档生成
- 使用 npx create-dumi 进行选择性创建库还是其它内容
- 文档命名和文档路由使用的是中划线而非驼峰
- pnpm store prune是清除缓存
- 本地私服发包时也会向npm网站查询包是否重名

### 发包的地址与本地使用的registry相关

* 通过切换registry地址，一是更换本地npm包的下载地址，二是如果要发包的话，这个地址就是包要发上去的地址
* 使用npm login 登录，npm logout登出
* npm version 为版本升级命令，有6个参数，比如patch,major,minor
* patch：补丁版本更新, minor：增加新功能, major：大改动
* npm私服方案：verdaccio
* verdaccio本地配置文件位置: /Users/用户名/.config/verdaccio/config.yaml
* storage属性指定包存储位置
* 发包npm publish，npm unpublish <包名>@版本号 --force (force可视情况加，不输入版本号就是删除整个包的所有版本)
