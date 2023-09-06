import React from "react";
var VirtualRow = function VirtualRow(props) {
  var stripe = props.stripe,
    item = props.item,
    style = props.style,
    idx = props.idx;
  var td = [];
  var tdItem = Object.keys(item);
  tdItem.forEach(function (ele, idx) {
    td.push( /*#__PURE__*/React.createElement("li", {
      className: "td",
      style: {
        width: 1 / tdItem.length * 100 + "%",
        height: style.height
      },
      key: idx + Math.random()
    }, item[ele]));
  });
  return /*#__PURE__*/React.createElement("ul", {
    style: style,
    className: stripe ? idx % 2 ? "tr item-even" : "tr item-odd" : "tr"
  }, td);
};
export default VirtualRow;