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

// src/VirtualSelect/styles.ts
var styles_exports = {};
__export(styles_exports, {
  default: () => styles_default
});
module.exports = __toCommonJS(styles_exports);
var import_styled_components = __toESM(require("styled-components"));
var StylesWrapper = import_styled_components.default.div`
  .hz-virtual-select{
    position: relative;
    .input{
      border: 1px solid #dedede;
      box-sizing: border-box;
      border-radius: 5px;
      font-size: 16px;
      padding-left: 10px;
    }
    .icon{
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
    }
    .tip, .tip-cover{
      width: 0;
      height: 0;
      border: 5px solid transparent;
      position: absolute;
      left: 10px;
      z-index: 100;
    }
    .tip{
      border-bottom-color: #dedede;
    }
    .tip-cover{
      border-bottom-color: #fff;
    }
    .option{
      position: absolute;
      border: 1px solid #dedede;
      border-radius: 5px;
      box-sizing: border-box;
      max-height: 300px;
      z-index: 10;
      background: #fff;
      overflow: auto;
      .hz-virtual-list{
        border: none;
        .selected {
          background-color: #ddd !important;
          color: #206dd9;
          font-weight: bold;
        }
      }
    }
  }
`;
var styles_default = StylesWrapper;
