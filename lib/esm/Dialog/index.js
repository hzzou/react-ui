function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import StylesWrapper, { GlobalStyle } from "./styles";
import Icon from "../Icon";
var Dialog = function Dialog(props) {
  var _props$showDialog = props.showDialog,
    showDialog = _props$showDialog === void 0 ? false : _props$showDialog,
    _props$width = props.width,
    width = _props$width === void 0 ? 500 : _props$width,
    _props$height = props.height,
    height = _props$height === void 0 ? 300 : _props$height,
    title = props.title,
    content = props.content,
    footer = props.footer,
    _props$modal = props.modal,
    modal = _props$modal === void 0 ? true : _props$modal,
    onOpen = props.onOpen,
    onClose = props.onClose;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];

  // 监控多次来自父级的showDialog变化，
  // 本身关闭时，通过父级二次传进来
  useEffect(function () {
    setShow(showDialog);
    // 打开时触发
    if (showDialog) {
      onOpen && onOpen(showDialog);
    }
  }, [showDialog]);

  // 关闭弹窗
  var handleClose = function handleClose(event) {
    event.stopPropagation();
    setShow(false);
    onClose && onClose(event);
  };

  // modal为false时, 使用createPortal把Dialog插入body
  var Dialog = function Dialog() {
    return show ? /*#__PURE__*/React.createElement("div", {
      className: "hz-dialog",
      style: {
        width: width,
        height: height
      },
      onClick: function onClick(event) {
        return event.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("header", {
      className: "header"
    }, /*#__PURE__*/React.createElement("div", null, title || "标题"), /*#__PURE__*/React.createElement(Icon, {
      onClick: handleClose,
      name: "close",
      size: 20
    })), /*#__PURE__*/React.createElement("article", {
      className: "body"
    }, content), /*#__PURE__*/React.createElement("footer", {
      className: "footer"
    }, footer)) : null;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, modal ? /*#__PURE__*/React.createElement(StylesWrapper, null, /*#__PURE__*/React.createElement("div", {
    className: show ? "modal" : "",
    onClick: handleClose
  }, /*#__PURE__*/React.createElement(Dialog, null))) : show && /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement("div", {
    className: "no-modal"
  }, /*#__PURE__*/React.createElement(Dialog, null)), document.body), show && !modal ? /*#__PURE__*/React.createElement(GlobalStyle, null) : null);
};
export default Dialog;