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

var firstDay = function firstDay(persianDate) {
  return persianDate.day();
};

var index = function index(row, column) {
  return row * 7 + column;
};

var indexToDay = function indexToDay(i, j, persianDate) {
  return index(i, j) - firstDay(persianDate) + 1;
};

var day = function day(i, j, persianDate) {
  return persianDate.add('d', indexToDay(i, j, persianDate));
};

var isPrev = function isPrev(i, j, persianDate) {
  return index(i, j) < firstDay(persianDate) - 1;
};

var isNext = function isNext(i, j, persianDate) {
  return persianDate.daysInMonth() <= index(i, j) - (firstDay(persianDate) - 1);
};

var isSame = function isSame(target, day) {
  return target.isSameDay(day);
};

var MonthRow = function MonthRow(_ref) {
  var row = _ref.row,
      persianDate = _ref.persianDate,
      now = _ref.now,
      selected = _ref.selected,
      onSelectDate = _ref.onSelectDate;
  return /*#__PURE__*/_react["default"].createElement("tr", null, _toConsumableArray(Array(7)).map(function (_, j) {
    return /*#__PURE__*/_react["default"].createElement("td", {
      key: j,
      className: isPrev(row, j, persianDate) ? 'prev' : isNext(row, j, persianDate) ? 'next' : isSame(now, day(row, j, persianDate)) ? 'today' : isSame(selected, day(row, j, persianDate)) ? 'selected' : '',
      "data-day": indexToDay(row, j, persianDate),
      onClick: onSelectDate
    }, day(row, j, persianDate).format('D'));
  }));
};

MonthRow.propTypes = {
  row: _propTypes["default"].number,
  persianDate: _propTypes["default"].instanceOf(_persianDate["default"]),
  now: _propTypes["default"].instanceOf(_persianDate["default"]),
  selected: _propTypes["default"].instanceOf(_persianDate["default"]),
  onSelectDate: _propTypes["default"].func
};
var _default = MonthRow;
exports["default"] = _default;