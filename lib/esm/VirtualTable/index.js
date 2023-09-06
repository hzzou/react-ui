function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from "react";
import { StylesWrapper } from "./styles";
import VirtualRow from "./virtualRow";
var VirtualTable = function VirtualTable(props) {
  var _props$itemHeight = props.itemHeight,
    itemHeight = _props$itemHeight === void 0 ? 40 : _props$itemHeight,
    _props$showHeader = props.showHeader,
    showHeader = _props$showHeader === void 0 ? true : _props$showHeader,
    _props$stripe = props.stripe,
    stripe = _props$stripe === void 0 ? false : _props$stripe,
    _props$tableData = props.tableData,
    tableData = _props$tableData === void 0 ? [] : _props$tableData,
    _props$height = props.height,
    height = _props$height === void 0 ? 400 : _props$height,
    _props$fixHead = props.fixHead,
    fixHead = _props$fixHead === void 0 ? true : _props$fixHead,
    _props$headerAlign = props.headerAlign,
    headerAlign = _props$headerAlign === void 0 ? "left" : _props$headerAlign,
    _props$align = props.align,
    align = _props$align === void 0 ? "left" : _props$align,
    onScroll = props.onScroll;
  var thHead = [],
    _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    scrollOffset = _useState2[0],
    setScrollOffset = _useState2[1],
    itemCount = tableData.length;

  // 表头
  var head = tableData.length > 0 ? Object.keys(tableData[0]) : [];
  head.forEach(function (item) {
    thHead.push( /*#__PURE__*/React.createElement("li", {
      className: "th",
      style: {
        width: 1 / head.length * 100 + "%",
        height: itemHeight
      },
      key: item
    }, item));
  });

  // 获取距离顶部的滚动距离
  // 滚动事件不能添加到tbody上,会影响到fixHead固定头部属性
  var handleScroll = function handleScroll(event) {
    // 虽然浏览器上看currentTarget是null但是能拿到
    var scrollTop = event.currentTarget.scrollTop;
    setScrollOffset(scrollTop);
    onScroll(event); //函数回调，即是事件触发
  };

  // 获取可视区元素
  var getClientChildren = function getClientChildren() {
    var starIdx = Math.floor(scrollOffset / itemHeight),
      // 可视区起始索引
      finialStartIdx = Math.max(0, starIdx - 2),
      // 上缓冲区起始索引
      numVisible = Math.ceil(height / itemHeight),
      // 可视区展示的元素个数
      endIdx = Math.min(itemCount, starIdx + numVisible + 1),
      // 下缓冲区结束索引
      item = [];

    // 根据动态算出的起始索引，获取需要显示的元素
    for (var i = finialStartIdx; i < endIdx; i++) {
      var itemStyle = {
        textAlign: align,
        height: itemHeight,
        top: showHeader ? itemHeight + itemHeight * i : itemHeight * i // 计算每个元素的top
      };

      item.push( /*#__PURE__*/React.createElement(VirtualRow, {
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
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      height: height
    },
    onScroll: handleScroll,
    className: "table"
  }, showHeader && /*#__PURE__*/React.createElement("header", {
    className: "thead",
    style: {
      position: fixHead ? "sticky" : "relative"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "tr",
    style: {
      textAlign: headerAlign
    }
  }, thHead)), /*#__PURE__*/React.createElement("section", {
    className: "tbody",
    style: {
      height: showHeader ? height - itemHeight : height
    }
  }, tableData.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, getClientChildren()) : /*#__PURE__*/React.createElement("div", {
    className: "default"
  }, "\u6682\u65E0\u6570\u636E")))));
};
export default VirtualTable;