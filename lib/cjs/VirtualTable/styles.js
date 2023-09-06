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

// src/VirtualTable/styles.ts
var styles_exports = {};
__export(styles_exports, {
  StylesWrapper: () => StylesWrapper
});
module.exports = __toCommonJS(styles_exports);
var import_styled_components = __toESM(require("styled-components"));
var StylesWrapper = import_styled_components.default.div` 
  .virtual-table {
    border: 1px solid #dedede;
    color: #333;
    width: 100%;
    .table {
      position: relative;
      overflow: auto;
      display: flex;
      flex-direction: column;
      width: 100%;
      .thead,
      .tbody {
        width: 100%;
        .tr {
          display: flex;
          width: 100%;
          margin: 0;
          padding: 0;
          .th,
          .td {
            list-style: none;
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid #999;
            line-height: 1em;
            &:last-of-type {
              border-right: none;
            }
          }
        }
      }

      .thead {
        top: 0;
        z-index: 10000;
        .tr {
          background-color: #dedede;
          .th {
            font-weight: bold;
          }
        }
      }
      .tbody {
        .tr {
          position: absolute;
          border-bottom: 1px solid #dedede;
          &:last-of-type {
            border-bottom: none;
          }
          .td {
            border-color: #dedede;
          }
        }
        .item-odd {
          background-color: #fff;
        }
        .item-even {
          background-color: #eee;
        }
      }
    }
  }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StylesWrapper
});
