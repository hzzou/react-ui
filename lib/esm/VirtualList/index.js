function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from "react";
import ListItem from "./listItem";
import StylesWrapper from "./styles";

// 虚拟列表
var VirtualList = function VirtualList(props) {
  var _props$height = props.height,
    height = _props$height === void 0 ? 300 : _props$height,
    _props$width = props.width,
    width = _props$width === void 0 ? 600 : _props$width,
    _props$itemHeight = props.itemHeight,
    itemHeight = _props$itemHeight === void 0 ? 30 : _props$itemHeight,
    _props$stripe = props.stripe,
    stripe = _props$stripe === void 0 ? false : _props$stripe,
    listData = props.listData,
    onScroll = props.onScroll,
    onClick = props.onClick;

  // 记录滚动高度
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    scrollOffset = _useState2[0],
    setScrollOffset = _useState2[1],
    itemCount = listData.length,
    _useState3 = useState(-1),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1]; // 有为0的情况,所以初始值设为-1

  // 点击选择事件
  var handleClick = function handleClick(event, selected, item) {
    setSelected(selected);
    onClick && onClick(event, item);
  };

  // 每当滚动scrollOffset更新时，重新计算当前items
  var getChildren = function getChildren() {
    var startIdx = Math.floor(scrollOffset / itemHeight),
      // 可视区起始索引
      finialStartIdx = Math.max(0, startIdx - 2),
      // 上缓冲区起始索引
      numVisible = Math.ceil(height / itemHeight),
      // 可视区能展示的最大元素个数
      endIdx = Math.min(itemCount, startIdx + numVisible + 3),
      // 下缓冲区结束索引
      items = [];

    // 根据上面计算的索引值，不断给container添加元素
    for (var i = finialStartIdx; i < endIdx; i++) {
      var itemStyle = {
        height: itemHeight,
        top: itemHeight * i // 计算每个元素在container中的top值
      };
      items.push( /*#__PURE__*/React.createElement(ListItem, {
        key: i,
        idx: i,
        selected: selected,
        stripe: stripe,
        style: itemStyle,
        item: listData[i],
        onClick: handleClick
      }));
    }
    return items;
  };

  // 获取距离顶部的滚动值
  var handleScroll = function handleScroll(event) {
    var scrollTop = event.currentTarget.scrollTop;
    setScrollOffset(scrollTop);
    onScroll && onScroll(event); //函数回调，即是事件触发
  };
  return /*#__PURE__*/React.createElement(StylesWrapper, null, /*#__PURE__*/React.createElement("div", {
    className: "hz-virtual-list",
    style: {
      width: width,
      height: height
    },
    onScroll: handleScroll
  }, getChildren()));
};
export default VirtualList;