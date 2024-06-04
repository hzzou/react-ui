import styled, { createGlobalStyle } from "styled-components";

// 全局样式根据show和modal动态创建,否则样式不生效
var GlobalStyle = createGlobalStyle([".no-modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1000;display:grid;place-items:center;.hz-dialog{background:#fff;display:flex;flex-direction:column;border:1px solid #dedede;border-radius:5px;box-shadow:0 0 6px #dedede;box-sizing:border-box;padding:10px;font-size:16px;.header,.footer{flex:0 0 40px;line-height:40px;}.header{display:flex;justify-content:space-between;}.body{flex:1 1 auto;}}}"]);
export { GlobalStyle };
var StylesWrapper = styled.section.withConfig({
  displayName: "StylesWrapper",
  componentId: "hzlzh-react-ui__sc-autr3q-0"
})([".modal{position:fixed;top:0;left:0;z-index:1000;width:100vw;height:100vh;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;.hz-dialog{background:#fff;display:flex;flex-direction:column;border:1px solid #dedede;border-radius:5px;box-shadow:0 0 6px #dedede;box-sizing:border-box;padding:10px;font-size:16px;.header,.footer{flex:0 0 40px;line-height:40px;}.header{display:flex;justify-content:space-between;}.body{flex:1 1 auto;}}}"]);
export default StylesWrapper;