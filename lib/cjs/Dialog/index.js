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

// src/Dialog/index.tsx
var Dialog_exports = {};
__export(Dialog_exports, {
  default: () => Dialog_default
});
module.exports = __toCommonJS(Dialog_exports);
var import_react = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_styles = __toESM(require("./styles"));
var import_Icon = __toESM(require("../Icon"));
var Dialog = (props) => {
  const {
    showDialog = false,
    width = 500,
    height = 300,
    title,
    content,
    footer,
    modal = true,
    onOpen,
    onClose
  } = props;
  const [show, setShow] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setShow(showDialog);
    if (showDialog) {
      onOpen && onOpen(showDialog);
    }
  }, [showDialog]);
  const handleClose = (event) => {
    event.stopPropagation();
    setShow(false);
    onClose && onClose(event);
  };
  const Dialog2 = () => {
    return show ? /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "hz-dialog",
        style: { width, height },
        onClick: (event) => event.stopPropagation()
      },
      /* @__PURE__ */ import_react.default.createElement("header", { className: "header" }, /* @__PURE__ */ import_react.default.createElement("div", null, title || "标题"), /* @__PURE__ */ import_react.default.createElement(import_Icon.default, { onClick: handleClose, name: "close", size: 20 })),
      /* @__PURE__ */ import_react.default.createElement("article", { className: "body" }, content),
      /* @__PURE__ */ import_react.default.createElement("footer", { className: "footer" }, footer)
    ) : null;
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, modal ? /* @__PURE__ */ import_react.default.createElement(import_styles.default, null, /* @__PURE__ */ import_react.default.createElement("div", { className: show ? "modal" : "", onClick: handleClose }, /* @__PURE__ */ import_react.default.createElement(Dialog2, null))) : show && (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react.default.createElement("div", { className: "no-modal" }, /* @__PURE__ */ import_react.default.createElement(Dialog2, null)), document.body), show && !modal ? /* @__PURE__ */ import_react.default.createElement(import_styles.GlobalStyle, null) : null);
};
var Dialog_default = Dialog;
