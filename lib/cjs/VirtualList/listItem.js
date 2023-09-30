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

// src/VirtualList/listItem.tsx
var listItem_exports = {};
__export(listItem_exports, {
  default: () => listItem_default
});
module.exports = __toCommonJS(listItem_exports);
var import_react = __toESM(require("react"));
var ListItem = ({
  idx,
  selected,
  stripe,
  style,
  item,
  onClick
}) => {
  const handleClick = (event, idx2, item2) => {
    onClick && onClick(event, idx2, item2);
  };
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      onClick: (event) => handleClick(event, idx, item),
      className: stripe ? idx % 2 ? selected === idx ? "selected list list-item-odd" : "list list-item-odd" : selected === idx ? "selected list list-item-even" : "list list-item-even" : selected === idx ? "selected list" : "list",
      style
    },
    item.name
  );
};
var listItem_default = ListItem;
