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

// src/VirtualTable/virtualRow.tsx
var virtualRow_exports = {};
__export(virtualRow_exports, {
  default: () => virtualRow_default
});
module.exports = __toCommonJS(virtualRow_exports);
var import_react = __toESM(require("react"));
var VirtualRow = (props) => {
  const { stripe, item, style, idx, openSelect, checked, onCheck } = props;
  const td = [], tdItem = Object.keys(item);
  tdItem.forEach((ele, idx2) => {
    td.push(
      /* @__PURE__ */ import_react.default.createElement(
        "li",
        {
          className: "td",
          style: {
            width: 1 / tdItem.length * 100 + "%",
            height: style.height
          },
          key: idx2
        },
        item[ele]
      )
    );
  });
  const handleCheck = () => {
    onCheck && onCheck(item, idx);
  };
  openSelect && td.unshift(
    /* @__PURE__ */ import_react.default.createElement("li", { className: "td", key: "checkbox" }, /* @__PURE__ */ import_react.default.createElement("input", { type: "checkbox", readOnly: true, checked }))
  );
  return /* @__PURE__ */ import_react.default.createElement(
    "ul",
    {
      style,
      onClick: handleCheck,
      className: stripe ? idx % 2 ? "tr item-even" : "tr item-odd" : "tr"
    },
    td
  );
};
var virtualRow_default = VirtualRow;
