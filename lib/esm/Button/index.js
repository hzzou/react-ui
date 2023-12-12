var _excluded = ["type", "nativeType", "size", "iconName", "loading", "round", "circle", "plain", "disabled", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from "react";
import styles from "./index.module.scss";
import Icon from "../Icon";
var Button = function Button(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? "default" : _props$type,
    _props$nativeType = props.nativeType,
    nativeType = _props$nativeType === void 0 ? "button" : _props$nativeType,
    _props$size = props.size,
    size = _props$size === void 0 ? "medium" : _props$size,
    _props$iconName = props.iconName,
    iconName = _props$iconName === void 0 ? "" : _props$iconName,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    _props$round = props.round,
    round = _props$round === void 0 ? false : _props$round,
    _props$circle = props.circle,
    circle = _props$circle === void 0 ? false : _props$circle,
    _props$plain = props.plain,
    plain = _props$plain === void 0 ? false : _props$plain,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    children = props.children,
    rest = _objectWithoutProperties(props, _excluded);

  // click事件(非原生元素组件，即使是原生click事件也需要用回调封装回传)
  // 也可用ButtonProps接口继承HTMLAttributes,使用...rest全部赋值在button上
  var handleClick = function handleClick(event) {
    // onClick && onClick(event);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles["hz-button"]
  }, /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    className: [styles[type], styles[size], round ? styles["round"] : null, circle ? styles["circle"] : null, plain ? styles["plain"] : null, loading ? styles["loading"] : null].filter(function (ele) {
      return ele !== null;
    }).join(" "),
    type: nativeType,
    disabled: disabled
  }), loading ? /*#__PURE__*/React.createElement("span", {
    className: styles["pre-icon"]
  }, /*#__PURE__*/React.createElement(Icon, {
    className: [styles["icon-loading"], styles["hz-icon"]].join(" "),
    name: "loading"
  })) : null, iconName && !loading ? /*#__PURE__*/React.createElement("span", {
    className: styles["pre-icon"]
  }, /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    className: styles["hz-icon"]
  })) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null));
};
export default Button;