import React from "react";
import { StylesWrapper } from "./styles";
import "../../assets/fonts/iconfont.css";
var Icon = function Icon(props) {
  var name = props.name,
    _props$color = props.color,
    color = _props$color === void 0 ? "#999" : _props$color,
    _props$size = props.size,
    size = _props$size === void 0 ? 16 : _props$size;
  return /*#__PURE__*/React.createElement(StylesWrapper, null, /*#__PURE__*/React.createElement("i", {
    className: ["iconfont", "icon-" + name].join(" "),
    style: {
      color: color,
      fontSize: size + "px"
    }
  }));
};
export default Icon;