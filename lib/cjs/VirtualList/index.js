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

// src/VirtualList/index.tsx
var VirtualList_exports = {};
__export(VirtualList_exports, {
  default: () => VirtualList_default
});
module.exports = __toCommonJS(VirtualList_exports);
var import_react = __toESM(require("react"));
var import_listItem = __toESM(require("./listItem"));
var import_styles = __toESM(require("./styles"));
var VirtualList = (props) => {
  const { height = 300, width = 600, itemHeight = 30, stripe = false, listData, onScroll, onClick } = props;
  const [scrollOffset, setScrolllOffset] = (0, import_react.useState)(0), itemCount = listData.length, [selected, setSelected] = (0, import_react.useState)(-1);
  const getChildren = () => {
    const startIdx = Math.floor(scrollOffset / itemHeight), finialStartIdx = Math.max(0, startIdx - 2), numVisible = Math.ceil(height / itemHeight), endIdx = Math.min(itemCount, startIdx + numVisible + 3), items = [];
    for (let i = finialStartIdx; i < endIdx; i++) {
      const itemStyle = {
        height: itemHeight,
        top: itemHeight * i
        // 计算每个元素在container中的top值
      };
      items.push(
        /* @__PURE__ */ import_react.default.createElement(
          import_listItem.default,
          {
            key: i,
            idx: i,
            selected,
            stripe,
            style: itemStyle,
            item: listData[i],
            onClick: handleClick
          }
        )
      );
    }
    return items;
  };
  const handleClick = (event, selected2, item) => {
    setSelected(selected2);
    onClick && onClick(event, item);
  };
  const handleScroll = (event) => {
    const { scrollTop } = event.currentTarget;
    setScrolllOffset(scrollTop);
    onScroll && onScroll(event);
  };
  return /* @__PURE__ */ import_react.default.createElement(import_styles.default, null, /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: "virtual-list",
      style: { width, height },
      onScroll: handleScroll
    },
    getChildren()
  ));
};
var VirtualList_default = VirtualList;
