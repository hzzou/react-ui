//虚拟列表Item
import React from "react";
var ListItem = function ListItem(_ref) {
  var idx = _ref.idx,
    selected = _ref.selected,
    stripe = _ref.stripe,
    style = _ref.style,
    item = _ref.item,
    onClick = _ref.onClick;
  var handleClick = function handleClick(event, idx, item) {
    onClick && onClick(event, idx, item);
  };

  // event => handleClick(event)
  return /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(event) {
      return handleClick(event, idx, item);
    },
    className: stripe ? idx % 2 ? selected === idx ? "selected list list-item-even" : "list list-item-even" : selected === idx ? "selected list list-item-odd" : "list list-item-odd" : selected === idx ? "selected list" : "list",
    style: style
  }, item.name);
};
export default ListItem;