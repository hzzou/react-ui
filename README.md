# 使用 father 和 dumi 开发 react 组建库 reactUI

- father 负责组建库源码的构建，dumi 负责组件的开发和文档生成
- 使用 npx create-dumi 进行选择性创建库还是其它内容
- 文档命名和文档路由使用的是中划线而非驼峰
- display:table 会导致 table 设置的高度被子元素撑开,要么设置为 display:block,要么在外部再套一层 div
