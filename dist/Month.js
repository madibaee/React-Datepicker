"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MonthRow = _interopRequireDefault(require("./MonthRow"));

var _TodayInfo = _interopRequireDefault(require("./TodayInfo"));

var _react2 = _interopRequireDefault(require("@mdi/react"));

var _js = require("@mdi/js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var computeRows = function computeRows(persianDate) {
  var days = persianDate.daysInMonth();
  var header = 8 - persianDate.day();
  var footer = (days - header) % 7;
  var body = days - header - footer;
  return body / 7 + (header === 0 ? 0 : 1) + (footer === 0 ? 0 : 1);
};

var _default = function _default(_ref) {
  var locale = _ref.locale,
      persianDate = _ref.persianDate,
      now = _ref.now,
      selected = _ref.selected,
      onSelectDate = _ref.onSelectDate,
      goPrev = _ref.goPrev,
      goNext = _ref.goNext,
      onSelectYear = _ref.onSelectYear,
      goToToday = _ref.goToToday,
      hasHeader = _ref.hasHeader,
      todayLink = _ref.todayLink;
  return _react["default"].createElement("div", {
    className: "picker"
  }, _react["default"].createElement("div", {
    className: hasHeader ? "header rich-header" : "header"
  }, hasHeader ? _react["default"].createElement(_TodayInfo["default"], {
    date: selected
  }) : "", _react["default"].createElement("span", {
    className: "chevron"
  }, _react["default"].createElement(_react2["default"], {
    path: locale === 'fa' ? _js.mdiChevronRight : _js.mdiChevronLeft,
    onClick: goPrev
  })), _react["default"].createElement("span", {
    onClick: onSelectYear
  }, persianDate.format('MMMM YYYY')), now.isSameMonth(persianDate) || !todayLink ? _react["default"].createElement("span", {
    className: "chevron"
  }, _react["default"].createElement(_react2["default"], {
    path: locale === 'fa' ? _js.mdiChevronLeft : _js.mdiChevronRight,
    onClick: goNext
  })) : _react["default"].createElement("span", {
    className: "today-chevron"
  }, _react["default"].createElement("span", {
    className: "go-to-today",
    onClick: goToToday
  }, locale === 'fa' ? "امروز" : "Today"), _react["default"].createElement("span", {
    className: "chevron"
  }, _react["default"].createElement(_react2["default"], {
    path: locale === 'fa' ? _js.mdiChevronLeft : _js.mdiChevronRight,
    onClick: goNext
  })))), _react["default"].createElement("div", {
    className: "body"
  }, _react["default"].createElement("table", null, _react["default"].createElement("thead", null, _react["default"].createElement("tr", {
    className: "week-days"
  }, persianDate.rangeName().weekdaysMin.map(function (name, i) {
    return _react["default"].createElement("th", {
      key: i
    }, name);
  }))), _react["default"].createElement("tbody", null, _toConsumableArray(Array(computeRows(persianDate))).map(function (_, i) {
    return _react["default"].createElement(_MonthRow["default"], {
      key: i,
      row: i,
      persianDate: persianDate,
      now: now,
      selected: selected,
      onSelectDate: onSelectDate
    });
  })))));
};

exports["default"] = _default;