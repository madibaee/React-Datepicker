"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _persianDate = _interopRequireDefault(require("persian-date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isActive = function isActive(i, j) {
  return i === 3 && j !== 1 ? false : true;
};

var year = function year(i, j, persianDate) {
  var numbers = i * 3 + j;
  return isActive(i, j) ? (i === 3 ? 9 : numbers) + persianDate.year() : '';
};

var yearString = function yearString(i, j, persianDate) {
  var numbers = i * 3 + j;
  return isActive(i, j) ? persianDate.add('y', i === 3 ? 9 : numbers).format('YYYY') : '';
};

var DecadeRow = function DecadeRow(_ref) {
  var row = _ref.row,
      persianDate = _ref.persianDate,
      onSelectYear = _ref.onSelectYear;
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "decade-years"
  }, _toConsumableArray(Array(3)).map(function (_, j) {
    return /*#__PURE__*/_react["default"].createElement("td", {
      className: isActive(row, j) ? '' : 'disabled',
      key: j,
      "data-year": isActive(row, j) ? year(row, j, persianDate) : '',
      onClick: isActive(row, j) ? onSelectYear : function () {}
    }, yearString(row, j, persianDate));
  }));
};

DecadeRow.propTypes = {
  row: _propTypes["default"].number,
  persianDate: _propTypes["default"].instanceOf(_persianDate["default"]),
  onSelectYear: _propTypes["default"].func
};
var _default = DecadeRow;
exports["default"] = _default;