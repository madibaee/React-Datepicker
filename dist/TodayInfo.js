"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _persianDate = _interopRequireDefault(require("persian-date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TodayInfo = function TodayInfo(_ref) {
  var date = _ref.date;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "today-info"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "info"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "day"
  }, date.format('dddd')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "date"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h1"
  }, date.format('D'))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "month"
  }, date.format('MMMM')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "year"
  }, date.format('YYYY'))));
};

TodayInfo.propTypes = {
  date: _propTypes["default"].instanceOf(_persianDate["default"])
};
var _default = TodayInfo;
exports["default"] = _default;