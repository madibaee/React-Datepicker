"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _persianDate = _interopRequireDefault(require("persian-date"));

var _DecadeRow = _interopRequireDefault(require("./DecadeRow"));

var _Chevron = _interopRequireDefault(require("./Chevron"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var decade = function decade(year) {
  var firstYear = Math.floor(year / 10) * 10;
  return new _persianDate["default"]([firstYear]);
};

var getCenturyString = function getCenturyString(year) {
  var date = decade(year);
  var start = date.format('YYYY');
  var end = date.add('y', 9).format('YYYY');
  return "".concat(end, " - ").concat(start);
};

var Decade = function Decade(_ref) {
  var locale = _ref.locale,
      year = _ref.year,
      onSelectYear = _ref.onSelectYear,
      goPrev = _ref.goPrev,
      goNext = _ref.goNext,
      onSelectCentury = _ref.onSelectCentury;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "picker"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react["default"].createElement(_Chevron["default"], {
    dir: "back",
    locale: locale,
    goBack: goPrev
  }), /*#__PURE__*/_react["default"].createElement("span", {
    onClick: onSelectCentury
  }, getCenturyString(year)), /*#__PURE__*/_react["default"].createElement(_Chevron["default"], {
    dir: "forward",
    locale: locale,
    goForward: goNext
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "body"
  }, /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, _toConsumableArray(Array(4)).map(function (_, i) {
    return /*#__PURE__*/_react["default"].createElement(_DecadeRow["default"], {
      key: i,
      row: i,
      persianDate: decade(year),
      onSelectYear: onSelectYear
    });
  })))));
};

Decade.propTypes = {
  locale: _propTypes["default"].oneOf(['en', 'fa']),
  year: _propTypes["default"].number,
  onSelectYear: _propTypes["default"].func,
  goPrev: _propTypes["default"].func,
  goNext: _propTypes["default"].func,
  onSelectCentury: _propTypes["default"].func
};
var _default = Decade;
exports["default"] = _default;