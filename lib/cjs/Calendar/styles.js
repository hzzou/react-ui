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

// src/Calendar/styles.ts
var styles_exports = {};
__export(styles_exports, {
  default: () => styles_default
});
module.exports = __toCommonJS(styles_exports);
var import_styled_components = __toESM(require("styled-components"));
var StylesWrapper = import_styled_components.default.div`
    border: 1px solid #ddd;
    width: 100%;
    height: 100%;
    .calendar {
        width: 100%;
        height: 100%;
        flex: 1 1 500px;
        background: #fff;
        header {
            flex:1 1 60px;
            display: flex;
            justify-content: space-between;
            padding: 10px;
            box-sizing: border-box;
            .title {
                font-size: 26px;
                font-weight: 600;
            }

            .btns {
                display: flex;

                button {
                    margin: 0 5px;
                    height: 40px;
                }
            }
        }
        .body {
            display: flex;
            flex-wrap: wrap;
            .header {
                font-weight: 600;
                border-bottom: 1px solid #ddd;
                border-top: 1px solid #ddd;
                padding: 10px 0;
            }
            .first{
                width: calc(100% / 7);
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                padding: 10px 0;
            }
            .item {
                width: calc(100% / 7);
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                cursor: pointer;
                padding: 10px 0;
                &:hover{
                    background: rgba(0, 0, 0, 0.1);
                    color: rgba(64, 158, 255, 1);
                    font-weight: 600;
                }
            }

            .today {
                background: rgba(64, 158, 255, 1);
                color: #fff;
                font-weight: 600;
            }
        }
    }
`;
var styles_default = StylesWrapper;
