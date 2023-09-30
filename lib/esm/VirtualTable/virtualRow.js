import React from "react";
var VirtualRow = function VirtualRow(props) {
  var stripe = props.stripe,
    item = props.item,
    style = props.style,
    idx = props.idx,
    openSelect = props.openSelect,
    checked = props.checked,
    onCheck = props.onCheck;
  var td = [],
    tdItem = Object.keys(item);
  tdItem.forEach(function (ele, idx) {
    td.push( /*#__PURE__*/React.createElement("li", {
      className: "td",
      style: {
        width: 1 / tdItem.length * 100 + "%",
        height: style.height
      },
      key: idx
    }, item[ele]));
  });

  // 选择
  var handleCheck = function handleCheck() {
    onCheck && onCheck(item, idx);
  };
  openSelect && td.unshift( /*#__PURE__*/React.createElement("li", {
    className: "td",
    key: 'checkbox'
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    readOnly: true,
    checked: checked
  })));
  return /*#__PURE__*/React.createElement("ul", {
    style: style,
    onClick: handleCheck,
    className: stripe ? idx % 2 ? "tr item-even" : "tr item-odd" : "tr"
  }, td);
};
export default VirtualRow;