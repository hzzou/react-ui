var _excluded = ["name", "color", "size", "className"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from "react";
import { StylesWrapper } from "./styles";
import "../../assets/fonts/iconfont.css";
var Icon = function Icon(props) {
  // 其实接口 那里不用继承也可以,只需要props这里实现...rest即可,只不过是为了更好的有提示
  var name = props.name,
    _props$color = props.color,
    color = _props$color === void 0 ? "#999" : _props$color,
    _props$size = props.size,
    size = _props$size === void 0 ? 16 : _props$size,
    className = props.className,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(StylesWrapper, rest, /*#__PURE__*/React.createElement("i", {
    className: ["hz-icon", "iconfont", "icon-" + name, className].join(" "),
    style: {
      color: color,
      fontSize: size + "px"
    }
  }));
};
export default Icon;