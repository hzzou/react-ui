function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import StylesWrapper, { GlobalStyle } from "./styles";
import Icon from "../Icon";
import { createPortal } from "react-dom";
var Modal = /*#__PURE__*/forwardRef(function (props, ref) {
  var title = props.title,
    content = props.content,
    footer = props.footer,
    _props$width = props.width,
    width = _props$width === void 0 ? 500 : _props$width,
    _props$height = props.height,
    height = _props$height === void 0 ? 300 : _props$height,
    _props$modal = props.modal,
    modal = _props$modal === void 0 ? true : _props$modal,
    onOpen = props.onOpen,
    onClose = props.onClose;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];

  // 打开弹窗
  var handleOpen = function handleOpen() {
    setShow(true);
    onOpen && onOpen(true);
  };

  // 关闭弹窗
  var handleClose = function handleClose() {
    setShow(false);
  };
  useEffect(function () {
    onClose && onClose(false);
  }, [onClose]);

  // 可以不把ref转发到具体的html元素,而暴露自定义方法
  useImperativeHandle(ref, function () {
    return {
      handleOpen: handleOpen,
      handleClose: handleClose
    };
  }, []);

  // modal为false时, 使用createPortal把Modal插入body
  var Dialog = function Dialog() {
    return show ? /*#__PURE__*/React.createElement("div", {
      className: "hz-dialog",
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      style: {
        width: width,
        height: height
      }
    }, /*#__PURE__*/React.createElement("header", {
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      className: "header"
    }, /*#__PURE__*/React.createElement("div", null, title || "标题"), /*#__PURE__*/React.createElement(Icon, {
      onClick: handleClose,
      name: "close",
      size: 20
    })), /*#__PURE__*/React.createElement("article", {
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      className: "body"
    }, content), /*#__PURE__*/React.createElement("footer", {
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      className: "footer"
    }, footer)) : null;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, modal ? /*#__PURE__*/React.createElement(StylesWrapper, null, /*#__PURE__*/React.createElement("div", {
    className: show ? "modal" : "",
    onClick: handleClose
  }, /*#__PURE__*/React.createElement(Dialog, null))) : show && /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement("div", {
    className: "no-modal"
  }, /*#__PURE__*/React.createElement(Dialog, null)), document.body), show && !modal ? /*#__PURE__*/React.createElement(GlobalStyle, null) : null);
});
export default Modal;