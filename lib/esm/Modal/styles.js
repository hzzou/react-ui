import styled, { createGlobalStyle } from "styled-components";

// 全局样式根据show和modal动态创建,否则样式不生效
var GlobalStyle = createGlobalStyle([".no-modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1000;.hz-dialog{background:#fff;display:grid;grid-template-rows:40px 1fr 40px;border:1px solid  #dedede;border-radius:5px;box-sizing:border-box;box-shadow:0 0  6px #dedede;padding:10px;font-size:16px;.header,.footer{line-height:40px;}.header{display:flex;justify-content:space-between;}}}"]);
export { GlobalStyle };
var StylesWrapper = styled.div.withConfig({
  displayName: "StylesWrapper",
  componentId: "hzlzh-react-ui__sc-195onyg-0"
})([".modal{position:fixed;top:0;left:0;z-index:1000;width:100vw;height:100vh;background:rgba(0,0,0,0.8);display:grid;place-items:center;.hz-dialog{background:#fff;display:grid;grid-template-rows:40px 1fr 40px;border:1px solid #dedede;border-radius:5px;box-sizing:border-box;box-shadow:0 0 6px #dedede;padding:10px;font-size:16px;.header,.footer{line-height:40px;}.header{display:flex;justify-content:space-between;}}}"]);
export default StylesWrapper;