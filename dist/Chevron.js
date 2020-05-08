"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Chevron = function Chevron(_ref) {
  var dir = _ref.dir,
      locale = _ref.locale,
      _ref$goBack = _ref.goBack,
      goBack = _ref$goBack === void 0 ? function (x) {
    return x;
  } : _ref$goBack,
      _ref$goForward = _ref.goForward,
      goForward = _ref$goForward === void 0 ? function (x) {
    return x;
  } : _ref$goForward;
  var props = {
    onClick: dir === 'back' ? goBack : goForward,
    size: 45,
    className: 'chevron'
  };
  var isRight = locale === 'fa' && dir === 'back' || locale === 'en' && dir === 'forward';
  var isLeft = locale === 'en' && dir === 'back' || locale === 'fa' && dir === 'forward';

  if (isRight) {
    return /*#__PURE__*/_react["default"].createElement(_Icons.ChevronRightIcon, props);
  } else if (isLeft) {
    return /*#__PURE__*/_react["default"].createElement(_Icons.ChevronLeftIcon, props);
  }
};

Chevron.prototype = {
  dir: _propTypes["default"].oneOf(['back', 'forward']),
  locale: _propTypes["default"].oneOf(['fa', 'en']),
  goBack: _propTypes["default"].func,
  goForward: _propTypes["default"].func
};
var _default = Chevron;
exports["default"] = _default;