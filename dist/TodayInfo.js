"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var date = _ref.date;
  return _react["default"].createElement("div", {
    className: "today-info"
  }, _react["default"].createElement("div", {
    className: "info"
  }, _react["default"].createElement("div", {
    className: "day"
  }, date.format('dddd')), _react["default"].createElement("div", {
    className: "date"
  }, _react["default"].createElement("div", {
    className: "h1"
  }, date.format('D'))), _react["default"].createElement("div", {
    className: "month"
  }, date.format('MMMM')), _react["default"].createElement("div", {
    className: "year"
  }, date.format('YYYY'))));
};

exports["default"] = _default;