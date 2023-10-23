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

// src/VirtualSelect/index.tsx
var VirtualSelect_exports = {};
__export(VirtualSelect_exports, {
  default: () => VirtualSelect_default
});
module.exports = __toCommonJS(VirtualSelect_exports);
var import_react = __toESM(require("react"));
var import_styles = __toESM(require("./styles"));
var import_VirtualList = __toESM(require("../VirtualList"));
var import_Icon = __toESM(require("../Icon"));
var VirtualSelect = (props) => {
  const { width = 300, itemHeight = 40, height = 200, listData, onSelect } = props;
  const [showOption, setShowOption] = (0, import_react.useState)(false), [inputValue, setInput] = (0, import_react.useState)("");
  const handleOption = () => {
    setShowOption(!showOption);
  };
  const handleSelect = (event, item) => {
    setInput(item.name);
    onSelect && onSelect(event, item);
    setTimeout(() => {
      setShowOption(false);
    }, 800);
  };
  const handleBlur = (event) => {
    const { value } = event.currentTarget;
    setTimeout(() => {
      if (inputValue === value) {
        setShowOption(false);
      }
    }, 800);
  };
  return /* @__PURE__ */ import_react.default.createElement(import_styles.default, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "virtual-select", style: { width } }, /* @__PURE__ */ import_react.default.createElement("input", { defaultValue: inputValue, onFocus: handleOption, onBlur: handleBlur, className: "input", style: { width, height: itemHeight } }), /* @__PURE__ */ import_react.default.createElement("div", { className: "icon", onClick: handleOption }, showOption ? /* @__PURE__ */ import_react.default.createElement(import_Icon.default, { name: "arrow-up-bold" }) : /* @__PURE__ */ import_react.default.createElement(import_Icon.default, { name: "arrow-down-bold" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "tip", style: { display: showOption ? "block" : "none", top: itemHeight } }), /* @__PURE__ */ import_react.default.createElement("div", { className: "tip-cover", style: { display: showOption ? "block" : "none", top: itemHeight + 1 } }), /* @__PURE__ */ import_react.default.createElement("div", { className: "option", style: {
    display: showOption ? "block" : "none",
    width,
    top: itemHeight + 10
  } }, /* @__PURE__ */ import_react.default.createElement(import_VirtualList.default, { onClick: handleSelect, width, itemHeight, height, listData }))));
};
var VirtualSelect_default = VirtualSelect;
