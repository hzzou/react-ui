var _excluded = ["date", "onSelectDay"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useEffect, useRef, useState } from "react";
import StylesWrapper from "./styles";
import Button from "../Button";
import { Solar, Lunar } from "lunar-typescript";
var Calendar = function Calendar(props) {
  var _props$date = props.date,
    date = _props$date === void 0 ? new Date() : _props$date,
    onSelectDay = props.onSelectDay,
    rest = _objectWithoutProperties(props, _excluded);
  var weeks = ["日", "一", "二", "三", "四", "五", "六"];
  var now = useRef(date);
  // 获取本月有多少天的小技巧
  var days = useRef(new Date(now.current.getFullYear(), now.current.getMonth() + 1, 0).getDate()); // 获取本月有多少天
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    dateObj = _useState2[0],
    setDateArr = _useState2[1];
  var _useState3 = useState(new Date(now.current.getFullYear(), now.current.getMonth(), 1).getDay()),
    _useState4 = _slicedToArray(_useState3, 2),
    firstDateDay = _useState4[0],
    setFirstDateDay = _useState4[1]; // 获取每个月的第一天是周几
  var _useState5 = useState({
      year: now.current.getFullYear(),
      month: now.current.getMonth() + 1
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    currentDate = _useState6[0],
    setCurrentDate = _useState6[1]; // 当前页面显示的年月
  var realDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  }; // 今天的年月日，用于高亮显示今天

  useEffect(function () {
    handleLunar();
  }, [days, currentDate]);

  // 设置农历
  var handleLunar = function handleLunar() {
    var arr = [];
    Array(days.current).fill("").map(function (_, idx) {
      var time = Solar.fromYmd(currentDate.year, currentDate.month, idx + 1);
      var lunarTime = Lunar.fromSolar(time).getDayInChinese();
      var lunarMonth = lunarTime === "初一" ? Lunar.fromSolar(time).getMonthInChinese() + "月" : lunarTime;
      arr.push({
        date: idx + 1,
        ChDate: lunarTime === "初一" ? lunarMonth : lunarTime
      });
    });
    setDateArr(arr);
  };

  // 前一个月份
  var handlePreMonth = function handlePreMonth() {
    // 更新当前now
    now.current = new Date(now.current.getFullYear(), now.current.getMonth() - 1, now.current.getDate());
    handleUpdate();
  };

  // 下一个月份
  var handleNextMonth = function handleNextMonth() {
    now.current = new Date(now.current.getFullYear(), now.current.getMonth() + 1, now.current.getDate());
    // now已经是更新后的
    handleUpdate();
  };

  // 今天
  var handleToday = function handleToday() {
    now.current = new Date();
    handleUpdate();
  };
  var handleUpdate = function handleUpdate() {
    days.current = new Date(now.current.getFullYear(), now.current.getMonth() + 1, 0).getDate();
    // now已经是更新后的
    setFirstDateDay(new Date(now.current.getFullYear(), now.current.getMonth(), 1).getDay());
    setCurrentDate({
      year: now.current.getFullYear(),
      month: now.current.getMonth() + 1
    });
  };

  // 选择当前日期
  var handleSelectDay = function handleSelectDay(date) {
    var time = Solar.fromYmd(currentDate.year, currentDate.month, date.date);
    onSelectDay && onSelectDay({
      year: currentDate.year,
      month: currentDate.month,
      date: date.date,
      lunarYear: Lunar.fromSolar(time).getYearInChinese(),
      lunarMonth: Lunar.fromSolar(time).getMonthInChinese(),
      lunarDate: date.ChDate
    });
  };
  return /*#__PURE__*/React.createElement(StylesWrapper, rest, /*#__PURE__*/React.createElement("div", {
    className: "calendar"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, currentDate.year, "\u5E74", currentDate.month, "\u6708"), /*#__PURE__*/React.createElement("div", {
    className: "btns"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handlePreMonth
  }, "<"), /*#__PURE__*/React.createElement(Button, {
    onClick: handleToday
  }, "\u4ECA\u5929"), /*#__PURE__*/React.createElement(Button, {
    onClick: handleNextMonth
  }, ">"))), /*#__PURE__*/React.createElement("main", {
    className: "body"
  }, weeks.map(function (ele) {
    return /*#__PURE__*/React.createElement("div", {
      key: ele,
      className: "item header"
    }, "周" + ele);
  }), Array(firstDateDay).fill("").map(function (_, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx + 1,
      className: "first"
    });
  }), dateObj.map(function (ele, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: ele.date,
      className: ["item", realDate.day === ele.date && realDate.month === currentDate.month && realDate.year === currentDate.year ? "today" : ""].join(" "),
      onClick: function onClick() {
        return handleSelectDay(ele);
      }
    }, /*#__PURE__*/React.createElement("div", null, ele.date), /*#__PURE__*/React.createElement("div", null, ele.ChDate));
  }))));
};
export default Calendar;