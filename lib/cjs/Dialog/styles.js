var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Dialog/styles.ts
var styles_exports = {};
__export(styles_exports, {
  GlobalStyle: () => GlobalStyle,
  default: () => styles_default
});
module.exports = __toCommonJS(styles_exports);
var import_styled_components = __toESM(require("styled-components"));
var GlobalStyle = import_styled_components.createGlobalStyle`
  .no-modal{
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    display: grid;
    place-items: center;
    .hz-dialog{
      background: #fff;
      display: flex;
      flex-direction: column;
      border: 1px solid #dedede;
      border-radius: 5px;
      box-shadow: 0 0 6px #dedede;
      box-sizing: border-box;
      padding: 10px;
      font-size: 16px;
      .header, .footer{
        flex: 0 0 40px;
        line-height: 40px;
      }
      .header{
        display: flex;
        justify-content: space-between;
      }
      .body{
        flex: 1 1 auto;
      }
    }
  }
`;
var StylesWrapper = import_styled_components.default.section`
  .modal{
    position: fixed;
    top: 0; left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    .hz-dialog{
      background: #fff;
      display: flex;
      flex-direction: column;
      border: 1px solid #dedede;
      border-radius: 5px;
      box-shadow: 0 0 6px #dedede;
      box-sizing: border-box;
      padding: 10px;
      font-size: 16px;
      .header, .footer{
        flex: 0 0 40px;
        line-height: 40px;
      }
      .header{
        display: flex;
        justify-content: space-between;
      }
      .body{
        flex: 1 1 auto;
      }
    }
  }
`;
var styles_default = StylesWrapper;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GlobalStyle
});
