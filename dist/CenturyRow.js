"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var isActive = function isActive(i, j) {
  return i === 3 && j !== 1 ? false : true;
};

var year = function year(i, j, persianDate) {
  var numbers = (j === 0 ? i * 3 : 1) * 10;
  return isActive(i, j) ? (i === 3 ? 90 : numbers) + persianDate.year() : '';
};

var yearString = function yearString(i, j, persianDate) {
  var numbers = (j === 0 ? i * 3 : 1) * 10;
  return isActive(i, j) ? persianDate.add('y', i === 3 ? 90 : numbers).format('YYYY') : '';
};

var _default = function _default(_ref) {
  var row = _ref.row,
      persianDate = _ref.persianDate,
      onSelectDecade = _ref.onSelectDecade;
  return React.createElement("tr", {
    className: "century-decades"
  }, _toConsumableArray(Array(3)).map(function (_, j) {
    return React.createElement("td", {
      className: isActive(row, j) ? "" : "disabled",
      key: j,
      "data-decade": isActive(row, j) ? year(row, j, persianDate) : '',
      onClick: isActive(row, j) ? onSelectDecade : function () {}
    }, yearString(row, j, persianDate));
  }));
};

exports["default"] = _default;