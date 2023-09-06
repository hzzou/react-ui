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

// src/VirtualTable/index.tsx
var VirtualTable_exports = {};
__export(VirtualTable_exports, {
  default: () => VirtualTable_default
});
module.exports = __toCommonJS(VirtualTable_exports);
var import_react = __toESM(require("react"));
var import_styles = require("./styles");
var import_virtualRow = __toESM(require("./virtualRow"));
var VirtualTable = (props) => {
  const {
    itemHeight = 40,
    showHeader = true,
    stripe = false,
    tableData = [],
    height = 400,
    fixHead = true,
    headerAlign = "left",
    align = "left",
    onScroll
  } = props;
  const thHead = [], [scrollOffset, setScrollOffset] = (0, import_react.useState)(0), itemCount = tableData.length;
  const head = tableData.length > 0 ? Object.keys(tableData[0]) : [];
  head.forEach((item) => {
    thHead.push(
      /* @__PURE__ */ import_react.default.createElement(
        "li",
        {
          className: "th",
          style: { width: 1 / head.length * 100 + "%", height: itemHeight },
          key: item
        },
        item
      )
    );
  });
  const handleScroll = (event) => {
    const { scrollTop } = event.currentTarget;
    setScrollOffset(scrollTop);
    onScroll(event);
  };
  const getClientChildren = () => {
    const starIdx = Math.floor(scrollOffset / itemHeight), finialStartIdx = Math.max(0, starIdx - 2), numVisible = Math.ceil(height / itemHeight), endIdx = Math.min(itemCount, starIdx + numVisible + 1), item = [];
    for (let i = finialStartIdx; i < endIdx; i++) {
      const itemStyle = {
        textAlign: align,
        height: itemHeight,
        top: showHeader ? itemHeight + itemHeight * i : itemHeight * i
        // 计算每个元素的top
      };
      item.push(
        /* @__PURE__ */ import_react.default.createElement(
          import_virtualRow.default,
          {
            key: i + Math.random(),
            idx: i,
            stripe,
            item: tableData[i],
            style: itemStyle
          }
        )
      );
    }
    return item;
  };
  return /* @__PURE__ */ import_react.default.createElement(import_styles.StylesWrapper, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "virtual-table" }, /* @__PURE__ */ import_react.default.createElement(
    "article",
    {
      style: { height },
      onScroll: handleScroll,
      className: "table"
    },
    showHeader && /* @__PURE__ */ import_react.default.createElement(
      "header",
      {
        className: "thead",
        style: { position: fixHead ? "sticky" : "relative" }
      },
      /* @__PURE__ */ import_react.default.createElement("ul", { className: "tr", style: { textAlign: headerAlign } }, thHead)
    ),
    /* @__PURE__ */ import_react.default.createElement("section", { className: "tbody", style: { height: showHeader ? height - itemHeight : height } }, tableData.length > 0 ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, getClientChildren()) : /* @__PURE__ */ import_react.default.createElement("div", { className: "default" }, "暂无数据"))
  )));
};
var VirtualTable_default = VirtualTable;
