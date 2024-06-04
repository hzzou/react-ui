var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/assets/common/css/var.ts
var var_exports = {};
__export(var_exports, {
  ColorPrimary: () => ColorPrimary,
  ColorPrimaryLight_1: () => ColorPrimaryLight_1,
  ColorWhite: () => ColorWhite
});
module.exports = __toCommonJS(var_exports);
var ColorPrimary = "rgba(64, 158, 255, 1)";
var ColorWhite = "rgba(255, 255, 255, 1)";
var ColorPrimaryLight_1 = `color-mix(in srgb, ${ColorPrimary}, ${ColorWhite} 10%)`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ColorPrimary,
  ColorPrimaryLight_1,
  ColorWhite
});
