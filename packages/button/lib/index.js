"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var APPEARANCES = {
  PRIMARY: "primary",
  SECONDARY: "secondary"
};

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "src__StyledButton",
  componentId: "sc-132cw10-0"
})(["border-radius:4px;cursor:pointer;flex-shrink:0;font-size:0.88rem;font-weight:500;height:40px;line-height:38px;min-width:200px;outline:none;overflow:hidden;padding:0 32px;text-align:center;text-decoration:none;text-transform:capitalize;transition:all 0.2s ease 0s;user-select:none;white-space:nowrap;", " ", ""], function (props) {
  return props.variant === APPEARANCES.PRIMARY && (0, _styledComponents.css)(["color:#fff;background-color:#000;:hover{color:#000;border:1px solid #000;background-color:#fff;}"]);
}, function (props) {
  return props.variant === APPEARANCES.SECONDARY && (0, _styledComponents.css)(["color:#666;background-color:white;border:1px solid #eaeaea;:hover{color:#fff;border:1px solid #000;background-color:#000;}"]);
});

var Button = function Button(props) {
  return _react["default"].createElement(StyledButton, props);
};

var _default = Button;
exports["default"] = _default;