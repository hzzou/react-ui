function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from "react";
import { StylesWrapper } from "./styles";
import VirtualColumn from "./virtualColumn";
var VirtualTable = function VirtualTable(props) {
  var _props$itemHeight = props.itemHeight,
    itemHeight = _props$itemHeight === void 0 ? 40 : _props$itemHeight,
    _props$showHeader = props.showHeader,
    showHeader = _props$showHeader === void 0 ? true : _props$showHeader,
    _props$stripe = props.stripe,
    stripe = _props$stripe === void 0 ? false : _props$stripe,
    tableData = props.tableData,
    _props$height = props.height,
    height = _props$height === void 0 ? 300 : _props$height,
    _props$fixHead = props.fixHead,
    fixHead = _props$fixHead === void 0 ? false : _props$fixHead,
    style = props.style,
    _props$headerAlign = props.headerAlign,
    headerAlign = _props$headerAlign === void 0 ? "left" : _props$headerAlign,
    _props$align = props.align,
    align = _props$align === void 0 ? "left" : _props$align;
  var thHead = [],
    _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    scrollOffset = _useState2[0],
    setScrollOffset = _useState2[1],
    itemCount = tableData.length;

  // 表头
  var head = Object.keys(tableData[0]);
  head.forEach(function (item) {
    thHead.push( /*#__PURE__*/React.createElement("div", {
      className: "th",
      style: {
        width: 1 / head.length * 100 + "%",
        height: itemHeight
      },
      key: item
    }, item));
  });

  // 获取距离顶部的滚动距离
  var handleScroll = function handleScroll(event) {
    // 虽然浏览器上看currentTarget是null但是能拿到
    var scrollTop = event.currentTarget.scrollTop;
    setScrollOffset(scrollTop);
  };

  // 获取可视区元素
  var getClientChildren = function getClientChildren() {
    var starIdx = Math.floor(scrollOffset / itemHeight),
      // 可视区起始索引
      finialStartIdx = Math.max(0, starIdx - 2),
      // 上缓冲区起始索引
      numVisible = Math.ceil(height / itemHeight),
      // 可视区展示的元素个数
      endIdx = Math.min(itemCount, starIdx + numVisible + 3),
      // 下缓冲区结束索引
      item = [];

    // 根据动态算出的起始索引，获取需要显示的元素
    for (var i = finialStartIdx; i < endIdx; i++) {
      var itemStyle = {
        textAlign: align,
        height: itemHeight,
        top: itemHeight * i // 计算每个元素的top
      };

      item.push( /*#__PURE__*/React.createElement(VirtualColumn, {
        key: i + Math.random(),
        idx: i,
        stripe: stripe,
        item: tableData[i],
        style: itemStyle
      }));
    }
    return item;
  };
  return /*#__PURE__*/React.createElement(StylesWrapper, null, /*#__PURE__*/React.createElement("div", {
    className: "virtual-table"
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, style), {}, {
      height: height
    }),
    onScroll: handleScroll,
    className: "table"
  }, showHeader && /*#__PURE__*/React.createElement("div", {
    className: "thead",
    style: {
      position: fixHead ? "sticky" : "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr",
    style: {
      textAlign: headerAlign
    }
  }, thHead)), /*#__PURE__*/React.createElement("div", {
    className: "tbody"
  }, getClientChildren()))));
};
export default VirtualTable;