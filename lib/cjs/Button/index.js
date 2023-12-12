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

// src/Button/index.tsx
var Button_exports = {};
__export(Button_exports, {
  default: () => Button_default
});
module.exports = __toCommonJS(Button_exports);
var import_react = __toESM(require("react"));
var import_index_module = __toESM(require("./index.module.scss"));
var import_Icon = __toESM(require("../Icon"));
var Button = (props) => {
  const {
    type = "default",
    nativeType = "button",
    size = "medium",
    iconName = "",
    loading = false,
    round = false,
    circle = false,
    plain = false,
    disabled = false,
    children,
    ...rest
  } = props;
  const handleClick = (event) => {
  };
  return /* @__PURE__ */ import_react.default.createElement("div", { className: import_index_module.default["hz-button"] }, /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      ...rest,
      className: [
        import_index_module.default[type],
        import_index_module.default[size],
        round ? import_index_module.default["round"] : null,
        circle ? import_index_module.default["circle"] : null,
        plain ? import_index_module.default["plain"] : null,
        loading ? import_index_module.default["loading"] : null
      ].filter((ele) => ele !== null).join(" "),
      type: nativeType,
      disabled
    },
    loading ? /* @__PURE__ */ import_react.default.createElement("span", { className: import_index_module.default["pre-icon"] }, /* @__PURE__ */ import_react.default.createElement(import_Icon.default, { className: [import_index_module.default["icon-loading"], import_index_module.default["hz-icon"]].join(" "), name: "loading" })) : null,
    iconName && !loading ? /* @__PURE__ */ import_react.default.createElement("span", { className: import_index_module.default["pre-icon"] }, /* @__PURE__ */ import_react.default.createElement(import_Icon.default, { name: iconName, className: import_index_module.default["hz-icon"] })) : null,
    children ? /* @__PURE__ */ import_react.default.createElement("span", null, children) : null
  ));
};
var Button_default = Button;
