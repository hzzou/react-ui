function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from "react";
import StylesWrapper from "./styles";
import VirtualList from "../VirtualList";
import Icon from "../Icon";
var VirtualSelect = function VirtualSelect(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 300 : _props$width,
    _props$itemHeight = props.itemHeight,
    itemHeight = _props$itemHeight === void 0 ? 40 : _props$itemHeight,
    _props$height = props.height,
    height = _props$height === void 0 ? 200 : _props$height,
    listData = props.listData,
    onSelect = props.onSelect;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showOption = _useState2[0],
    setShowOption = _useState2[1],
    _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInput = _useState4[1];

  // 显示下拉框
  var handleOption = function handleOption() {
    setShowOption(!showOption);
  };

  // 选择某一行
  var handleSelect = function handleSelect(event, item) {
    setInput(item.name);
    onSelect && onSelect(event, item);
    setTimeout(function () {
      setShowOption(false);
    }, 800);
  };

  // 失去焦点
  var handleBlur = function handleBlur(event) {
    var value = event.currentTarget.value;
    setTimeout(function () {
      if (inputValue === value) {
        setShowOption(false);
      }
    }, 800);
  };
  return /*#__PURE__*/React.createElement(StylesWrapper, null, /*#__PURE__*/React.createElement("div", {
    className: "hz-virtual-select",
    style: {
      width: width
    }
  }, /*#__PURE__*/React.createElement("input", {
    defaultValue: inputValue,
    onFocus: handleOption,
    onBlur: handleBlur,
    className: "input",
    style: {
      width: width,
      height: itemHeight
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "icon",
    onClick: handleOption
  }, showOption ? /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-bold"
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down-bold"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tip",
    style: {
      display: showOption ? "block" : "none",
      top: itemHeight
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tip-cover",
    style: {
      display: showOption ? "block" : "none",
      top: itemHeight + 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "option",
    style: {
      display: showOption ? "block" : "none",
      width: width,
      top: itemHeight + 10
    }
  }, /*#__PURE__*/React.createElement(VirtualList, {
    onClick: handleSelect,
    width: width,
    itemHeight: itemHeight,
    height: height,
    listData: listData
  }))));
};
export default VirtualSelect;