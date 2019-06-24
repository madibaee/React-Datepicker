"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var _default = function _default(_ref) {
  var row = _ref.row,
      persianDate = _ref.persianDate,
      now = _ref.now,
      selected = _ref.selected,
      onSelectDate = _ref.onSelectDate;
  return React.createElement("tr", null, _toConsumableArray(Array(7)).map(function (_, j) {
    return React.createElement("td", {
      key: j,
      className: isPrev(row, j, persianDate) ? 'prev' : isNext(row, j, persianDate) ? 'next' : isSame(now, day(row, j, persianDate)) ? 'today' : isSame(selected, day(row, j, persianDate)) ? 'selected' : '',
      "data-day": indexToDay(row, j, persianDate),
      onClick: onSelectDate
    }, day(row, j, persianDate).format('D'));
  }));
};

exports["default"] = _default;