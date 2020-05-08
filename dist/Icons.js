"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronLeftIcon = exports.ChevronRightIcon = exports.CalendarIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Icon = function Icon(_ref) {
  var path = _ref.path,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'black' : _ref$color,
      className = _ref.className,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function (x) {
    return x;
  } : _ref$onClick;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: className,
    width: size,
    height: size,
    fill: color,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: path
  }));
};

Icon.propTypes = {
  path: _propTypes["default"].string,
  size: _propTypes["default"].number,
  color: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};

var CalendarIcon = function CalendarIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(Icon, _extends({}, props, {
    path: "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
  }));
};

exports.CalendarIcon = CalendarIcon;

var ChevronRightIcon = function ChevronRightIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(Icon, _extends({}, props, {
    path: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
  }));
};

exports.ChevronRightIcon = ChevronRightIcon;

var ChevronLeftIcon = function ChevronLeftIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(Icon, _extends({}, props, {
    path: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
  }));
};

exports.ChevronLeftIcon = ChevronLeftIcon;