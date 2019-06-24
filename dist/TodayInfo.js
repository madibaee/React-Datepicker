"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var date = _ref.date;
  return React.createElement("div", {
    className: "today-info"
  }, React.createElement("div", {
    className: "info"
  }, React.createElement("div", {
    className: "day"
  }, date.format('dddd')), React.createElement("div", {
    className: "date"
  }, React.createElement("div", {
    className: "h1"
  }, date.format('D'))), React.createElement("div", {
    className: "month"
  }, date.format('MMMM')), React.createElement("div", {
    className: "year"
  }, date.format('YYYY'))));
};

exports["default"] = _default;