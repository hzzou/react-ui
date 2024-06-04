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

// src/Calendar/index.tsx
var Calendar_exports = {};
__export(Calendar_exports, {
  default: () => Calendar_default
});
module.exports = __toCommonJS(Calendar_exports);
var import_react = __toESM(require("react"));
var import_styles = __toESM(require("./styles"));
var import_Button = __toESM(require("../Button"));
var import_lunar_typescript = require("lunar-typescript");
var Calendar = (props) => {
  const { date = /* @__PURE__ */ new Date(), onSelectDay, ...rest } = props;
  const weeks = ["日", "一", "二", "三", "四", "五", "六"];
  const now = (0, import_react.useRef)(date);
  const days = (0, import_react.useRef)(new Date(now.current.getFullYear(), now.current.getMonth() + 1, 0).getDate());
  const [dateObj, setDateArr] = (0, import_react.useState)([]);
  const [firstDateDay, setFirstDateDay] = (0, import_react.useState)(
    new Date(now.current.getFullYear(), now.current.getMonth(), 1).getDay()
  );
  const [currentDate, setCurrentDate] = (0, import_react.useState)({
    year: now.current.getFullYear(),
    month: now.current.getMonth() + 1
  });
  const realDate = {
    year: (/* @__PURE__ */ new Date()).getFullYear(),
    month: (/* @__PURE__ */ new Date()).getMonth() + 1,
    day: (/* @__PURE__ */ new Date()).getDate()
  };
  (0, import_react.useEffect)(() => {
    handleLunar();
  }, [days, currentDate]);
  const handleLunar = () => {
    let arr = [];
    Array(days.current).fill("").map((_, idx) => {
      let time = import_lunar_typescript.Solar.fromYmd(currentDate.year, currentDate.month, idx + 1);
      let lunarTime = import_lunar_typescript.Lunar.fromSolar(time).getDayInChinese();
      let lunarMonth = lunarTime === "初一" ? import_lunar_typescript.Lunar.fromSolar(time).getMonthInChinese() + "月" : lunarTime;
      arr.push({
        date: idx + 1,
        ChDate: lunarTime === "初一" ? lunarMonth : lunarTime
      });
    });
    setDateArr(arr);
  };
  const handlePreMonth = () => {
    now.current = new Date(now.current.getFullYear(), now.current.getMonth() - 1, now.current.getDate());
    handleUpdate();
  };
  const handleNextMonth = () => {
    now.current = new Date(now.current.getFullYear(), now.current.getMonth() + 1, now.current.getDate());
    handleUpdate();
  };
  const handleToday = () => {
    now.current = /* @__PURE__ */ new Date();
    handleUpdate();
  };
  const handleUpdate = () => {
    days.current = new Date(now.current.getFullYear(), now.current.getMonth() + 1, 0).getDate();
    setFirstDateDay(new Date(now.current.getFullYear(), now.current.getMonth(), 1).getDay());
    setCurrentDate({ year: now.current.getFullYear(), month: now.current.getMonth() + 1 });
  };
  const handleSelectDay = (date2) => {
    let time = import_lunar_typescript.Solar.fromYmd(currentDate.year, currentDate.month, date2.date);
    onSelectDay && onSelectDay({
      year: currentDate.year,
      month: currentDate.month,
      date: date2.date,
      lunarYear: import_lunar_typescript.Lunar.fromSolar(time).getYearInChinese(),
      lunarMonth: import_lunar_typescript.Lunar.fromSolar(time).getMonthInChinese(),
      lunarDate: date2.ChDate
    });
  };
  return /* @__PURE__ */ import_react.default.createElement(import_styles.default, { ...rest }, /* @__PURE__ */ import_react.default.createElement("div", { className: "calendar" }, /* @__PURE__ */ import_react.default.createElement("header", null, /* @__PURE__ */ import_react.default.createElement("div", { className: "title" }, currentDate.year, "年", currentDate.month, "月"), /* @__PURE__ */ import_react.default.createElement("div", { className: "btns" }, /* @__PURE__ */ import_react.default.createElement(import_Button.default, { onClick: handlePreMonth }, "<"), /* @__PURE__ */ import_react.default.createElement(import_Button.default, { onClick: handleToday }, "今天"), /* @__PURE__ */ import_react.default.createElement(import_Button.default, { onClick: handleNextMonth }, ">"))), /* @__PURE__ */ import_react.default.createElement("main", { className: "body" }, weeks.map((ele) => /* @__PURE__ */ import_react.default.createElement("div", { key: ele, className: "item header" }, "周" + ele)), Array(firstDateDay).fill("").map((_, idx) => /* @__PURE__ */ import_react.default.createElement("div", { key: idx + 1, className: "first" })), dateObj.map((ele, idx) => /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      key: ele.date,
      className: ["item", realDate.day === ele.date && realDate.month === currentDate.month && realDate.year === currentDate.year ? "today" : ""].join(" "),
      onClick: () => handleSelectDay(ele)
    },
    /* @__PURE__ */ import_react.default.createElement("div", null, ele.date),
    /* @__PURE__ */ import_react.default.createElement("div", null, ele.ChDate)
  )))));
};
var Calendar_default = Calendar;
