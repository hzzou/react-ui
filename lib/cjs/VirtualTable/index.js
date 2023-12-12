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

// src/VirtualTable/index.tsx
var VirtualTable_exports = {};
__export(VirtualTable_exports, {
  default: () => VirtualTable_default
});
module.exports = __toCommonJS(VirtualTable_exports);
var import_react = __toESM(require("react"));
var import_styles = __toESM(require("./styles"));
var import_virtualRow = __toESM(require("./virtualRow"));
var VirtualTable = (props) => {
  const {
    itemHeight = 40,
    showHeader = true,
    stripe = false,
    tableData = [],
    height = 400,
    fixHead = true,
    headerAlign = "left",
    align = "left",
    openSelect = false,
    multiSelect = false,
    onCheck,
    onScroll
  } = props;
  const inputRef = (0, import_react.useRef)(null);
  const thHead = [], [scrollOffset, setScrollOffset] = (0, import_react.useState)(0), [currentIdx, setCurrentIdx] = (0, import_react.useState)(-1), [selected, setSelected] = (0, import_react.useState)([]), [selectedItem, setSelectedItem] = (0, import_react.useState)([]), itemCount = tableData.length;
  const head = tableData.length > 0 ? Object.keys(tableData[0]) : [];
  head.forEach((item) => {
    thHead.push(
      /* @__PURE__ */ import_react.default.createElement(
        "li",
        {
          className: "th",
          style: { width: 1 / head.length * 100 + "%", height: itemHeight },
          key: item
        },
        item
      )
    );
  });
  openSelect && thHead.unshift(
    /* @__PURE__ */ import_react.default.createElement("li", { className: "th", key: "checkbox" }, /* @__PURE__ */ import_react.default.createElement("input", { type: "checkbox", ref: inputRef }))
  );
  (0, import_react.useEffect)(() => {
    if (openSelect) {
      if (multiSelect) {
        const len = selected.length;
        if (len === 0) {
          inputRef.current.indeterminate = false;
          inputRef.current.checked = false;
        } else if (len > 0 && len < itemCount) {
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
  const handleScroll = (event) => {
    const { scrollTop } = event.currentTarget;
    setScrollOffset(scrollTop);
    onScroll && onScroll(event);
  };
  const handleCheck = (item, current) => {
    if (multiSelect) {
      const arr = selected.includes(current) ? selected.filter((ele) => ele !== current) : [...selected, current];
      const itemArr = selectedItem.includes(item) ? selectedItem.filter((ele) => ele !== item) : [...selectedItem, item];
      setSelected(arr);
      setSelectedItem(itemArr);
      openSelect && onCheck && onCheck(itemArr);
    } else {
      const idx = currentIdx === current ? -1 : current;
      setCurrentIdx(idx);
      openSelect && onCheck && onCheck(idx === -1 ? {} : item);
    }
  };
  const handleAllSelect = () => {
    if (multiSelect) {
      inputRef.current.checked = false;
      const arr = selected.length > 0 ? [] : tableData.map((ele, idx) => idx);
      const itemArr = selectedItem.length > 0 ? [] : tableData;
      setSelected(arr);
      setSelectedItem(itemArr);
      onCheck && onCheck(itemArr);
    } else {
      inputRef.current.checked = false;
      inputRef.current.indeterminate = false;
      setCurrentIdx(-1);
    }
  };
  const getClientChildren = () => {
    const starIdx = Math.floor(scrollOffset / itemHeight), finialStartIdx = Math.max(0, starIdx - 2), numVisible = Math.ceil(height / itemHeight), endIdx = Math.min(itemCount, starIdx + numVisible + 1), item = [];
    for (let i = finialStartIdx; i < endIdx; i++) {
      const itemStyle = {
        textAlign: align,
        height: itemHeight,
        top: showHeader ? itemHeight + itemHeight * i : itemHeight * i
        // 计算每个元素的top
      };
      item.push(
        /* @__PURE__ */ import_react.default.createElement(
          import_virtualRow.default,
          {
            key: i,
            idx: i,
            stripe,
            item: tableData[i],
            style: itemStyle,
            checked: multiSelect ? selected.includes(i) ? true : false : currentIdx === i ? true : false,
            openSelect,
            onCheck: handleCheck
          }
        )
      );
    }
    return item;
  };
  return /* @__PURE__ */ import_react.default.createElement(import_styles.default, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "hz-virtual-table" }, /* @__PURE__ */ import_react.default.createElement(
    "article",
    {
      style: { height },
      onScroll: handleScroll,
      className: "table"
    },
    showHeader && /* @__PURE__ */ import_react.default.createElement(
      "header",
      {
        className: "thead",
        style: { position: fixHead ? "sticky" : "relative" }
      },
      /* @__PURE__ */ import_react.default.createElement("ul", { onClick: handleAllSelect, className: "tr", style: { textAlign: headerAlign } }, thHead)
    ),
    /* @__PURE__ */ import_react.default.createElement("section", { className: "tbody", style: { height: showHeader ? height - itemHeight : height } }, tableData.length > 0 ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, getClientChildren()) : /* @__PURE__ */ import_react.default.createElement("div", { className: "default" }, "暂无数据"))
  )));
};
var VirtualTable_default = VirtualTable;
