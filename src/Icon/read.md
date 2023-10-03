
## **记录**

* 使用字体问题,自定义@font-face中urlr用${}加上在全局.d.ts声明文件中把字体文件声明为module
* jest测试时引入字体文件报错时,需要安装identity-obj-proxy包,在jest配置文件里声明
  moduleNameMapper: {
    iconfont: "identity-obj-proxy"
  },
* 可以定义在局部，也可以使用createGlobalStyle定义在全局, GlobalStyle也是一个组件,与StylesWrapper平级或者在全局
* 使用jest测试时报错，但是在style-components里引入字体文件运行不报错
* 可以直接引入在组件里面引入iconfont.css
