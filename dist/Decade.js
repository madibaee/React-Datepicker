"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _persianDate = _interopRequireDefault(require("persian-date"));

var _DecadeRow = _interopRequireDefault(require("./DecadeRow"));

var _react = _interopRequireDefault(require("@mdi/react"));

var _js = require("@mdi/js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var decade = function decade(year) {
  var firstYear = Math.floor(year / 10) * 10;
  return new _persianDate["default"]([firstYear]);
};

var _default = function _default(_ref) {
  var locale = _ref.locale,
      year = _ref.year,
      onSelectYear = _ref.onSelectYear,
      goPrev = _ref.goPrev,
      goNext = _ref.goNext,
      onSelectCentury = _ref.onSelectCentury;
  return React.createElement("div", {
    className: "picker"
  }, React.createElement("div", {
    className: "header"
  }, React.createElement("span", {
    className: "chevron"
  }, React.createElement(_react["default"], {
    path: locale === 'fa' ? _js.mdiChevronRight : _js.mdiChevronLeft,
    onClick: goPrev
  })), React.createElement("span", {
    onClick: onSelectCentury
  }, decade(year).add('y', 9).format('YYYY') + ' - ' + decade(year).format('YYYY')), React.createElement("span", {
    className: "chevron"
  }, React.createElement(_react["default"], {
    path: locale === 'fa' ? _js.mdiChevronLeft : _js.mdiChevronRight,
    onClick: goNext
  }))), React.createElement("div", {
    className: "body"
  }, React.createElement("table", null, React.createElement("tbody", null, _toConsumableArray(Array(4)).map(function (_, i) {
    return React.createElement(_DecadeRow["default"], {
      key: i,
      row: i,
      persianDate: decade(year),
      onSelectYear: onSelectYear
    });
  })))));
};

exports["default"] = _default;