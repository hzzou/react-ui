//虚拟列表Item
import React from "react";
var ListItem = function ListItem(_ref) {
  var idx = _ref.idx,
    stripe = _ref.stripe,
    style = _ref.style,
    item = _ref.item;
  return /*#__PURE__*/React.createElement("div", {
    className: stripe ? idx % 2 ? "list list-item-odd" : "list list-item-even" : "list",
    style: style
  }, item.name);
};
export default ListItem;