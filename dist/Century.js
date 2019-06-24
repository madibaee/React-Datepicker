"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _persianDate = _interopRequireDefault(require("persian-date"));

var _CenturyRow = _interopRequireDefault(require("./CenturyRow"));

var _react = _interopRequireDefault(require("@mdi/react"));

var _js = require("@mdi/js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var century = function century(year) {
  var firstYear = Math.floor(year / 100) * 100;
  return new _persianDate["default"]([firstYear]);
};

var _default = function _default(_ref) {
  var locale = _ref.locale,
      year = _ref.year,
      onSelectDecade = _ref.onSelectDecade,
      goPrev = _ref.goPrev,
      goNext = _ref.goNext;
  return React.createElement("div", {
    className: "picker"
  }, React.createElement("div", {
    className: "header"
  }, React.createElement("span", {
    className: "chevron"
  }, React.createElement(_react["default"], {
    path: locale === 'fa' ? _js.mdiChevronRight : _js.mdiChevronLeft,
    onClick: goPrev
  })), React.createElement("span", null, century(year).add('y', 99).format('YYYY') + ' - ' + century(year).format('YYYY')), React.createElement("span", {
    className: "chevron"
  }, React.createElement(_react["default"], {
    path: locale === 'fa' ? _js.mdiChevronLeft : _js.mdiChevronRight,
    onClick: goNext
  }))), React.createElement("div", {
    className: "body"
  }, React.createElement("table", null, React.createElement("tbody", null, _toConsumableArray(Array(4)).map(function (_, i) {
    return React.createElement(_CenturyRow["default"], {
      key: i,
      row: i,
      persianDate: century(year),
      onSelectDecade: onSelectDecade
    });
  })))));
};

exports["default"] = _default;