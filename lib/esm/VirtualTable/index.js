function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useRef, useState } from "react";
import StylesWrapper from "./styles";
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
    _props$openSelect = props.openSelect,
    openSelect = _props$openSelect === void 0 ? false : _props$openSelect,
    _props$multiSelect = props.multiSelect,
    multiSelect = _props$multiSelect === void 0 ? false : _props$multiSelect,
    onCheck = props.onCheck,
    onScroll = props.onScroll;
  var inputRef = useRef(null);
  var thHead = [],
    _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    scrollOffset = _useState2[0],
    setScrollOffset = _useState2[1],
    _useState3 = useState(-1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentIdx = _useState4[0],
    setCurrentIdx = _useState4[1],
    _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selected = _useState6[0],
    setSelected = _useState6[1],
    _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedItem = _useState8[0],
    setSelectedItem = _useState8[1],
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

  // 开启选择框
  openSelect && thHead.unshift( /*#__PURE__*/React.createElement("li", {
    className: "th",
    key: 'checkbox'
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    ref: inputRef
  })));
  useEffect(function () {
    if (openSelect) {
      if (multiSelect) {
        var len = selected.length;
        if (len > 0 && len < itemCount) {
          inputRef.current.indeterminate = true;
        } else if (len === itemCount) {
          inputRef.current.indeterminate = false;
          inputRef.current.checked = true;
        }
      } else {
        currentIdx > -1 ? inputRef.current.indeterminate = true : inputRef.current.indeterminate = false;
      }
    }
  }, [inputRef, multiSelect, openSelect, currentIdx, selected]);

  // 获取距离顶部的滚动距离
  // 滚动事件不能添加到tbody上,会影响到fixHead固定头部属性
  var handleScroll = function handleScroll(event) {
    // 虽然浏览器上看currentTarget是null但是能拿到
    var scrollTop = event.currentTarget.scrollTop;
    setScrollOffset(scrollTop);
    onScroll && onScroll(event); //函数回调，即是事件触发
  };

  // 行选中
  var handleCheck = function handleCheck(item, current) {
    if (multiSelect) {
      var arr = selected.includes(current) ? selected.filter(function (ele) {
        return ele !== current;
      }) : [].concat(_toConsumableArray(selected), [current]);
      var itemArr = selectedItem.includes(item) ? selectedItem.filter(function (ele) {
        return ele !== item;
      }) : [].concat(_toConsumableArray(selectedItem), [item]);
      setSelected(arr);
      setSelectedItem(itemArr);
      onCheck && onCheck(itemArr);
    } else {
      var idx = currentIdx === current ? -1 : current;
      setCurrentIdx(idx);
      onCheck && onCheck(item);
    }
  };

  // 全选中
  var handleAllSelect = function handleAllSelect() {
    inputRef.current.checked = !inputRef.current.checked;
    var arr = selected.length > 0 ? [] : tableData.map(function (ele, idx) {
      return idx;
    });
    setSelected(arr);
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
        key: i,
        idx: i,
        stripe: stripe,
        item: tableData[i],
        style: itemStyle,
        checked: multiSelect ? selected.includes(i) ? true : false : currentIdx === i ? true : false,
        openSelect: openSelect,
        onCheck: handleCheck
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
    onClick: handleAllSelect,
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