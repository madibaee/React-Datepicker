"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _persianDate = _interopRequireDefault(require("persian-date"));

var _MonthRow = _interopRequireDefault(require("./MonthRow"));

var _TodayInfo = _interopRequireDefault(require("./TodayInfo"));

var _translations = _interopRequireDefault(require("./translations"));

var _Chevron = _interopRequireDefault(require("./Chevron"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var computeRows = function computeRows(persianDate) {
  var days = persianDate.daysInMonth();
  var header = 8 - persianDate.day();
  var footer = (days - header) % 7;
  var body = days - header - footer;
  return body / 7 + (header === 0 ? 0 : 1) + (footer === 0 ? 0 : 1);
};

var Month = function Month(_ref) {
  var now = _ref.now,
      locale = _ref.locale,
      goPrev = _ref.goPrev,
      goNext = _ref.goNext,
      selected = _ref.selected,
      goToToday = _ref.goToToday,
      hasHeader = _ref.hasHeader,
      persianDate = _ref.persianDate,
      onSelectYear = _ref.onSelectYear,
      onSelectDate = _ref.onSelectDate,
      hasTodayLink = _ref.hasTodayLink;
  var messages = _translations["default"][locale];
  var showTodayLink = !now.isSameMonth(persianDate) && hasTodayLink;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "picker"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: hasHeader ? 'header rich-header' : 'header'
  }, hasHeader ? /*#__PURE__*/_react["default"].createElement(_TodayInfo["default"], {
    date: selected
  }) : null, /*#__PURE__*/_react["default"].createElement(_Chevron["default"], {
    dir: "back",
    locale: locale,
    goBack: goPrev
  }), /*#__PURE__*/_react["default"].createElement("span", {
    onClick: onSelectYear
  }, persianDate.format('MMMM YYYY')), showTodayLink ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "today-chevron"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "go-to-today",
    onClick: goToToday
  }, messages.today), /*#__PURE__*/_react["default"].createElement(_Chevron["default"], {
    dir: "forward",
    locale: locale,
    goForward: goNext
  })) : /*#__PURE__*/_react["default"].createElement(_Chevron["default"], {
    dir: "forward",
    locale: locale,
    goForward: goNext
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "body"
  }, /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    className: "week-days"
  }, persianDate.rangeName().weekdaysMin.map(function (name, i) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: i
    }, name);
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, _toConsumableArray(Array(computeRows(persianDate))).map(function (_, i) {
    return /*#__PURE__*/_react["default"].createElement(_MonthRow["default"], {
      key: i,
      row: i,
      persianDate: persianDate,
      now: now,
      selected: selected,
      onSelectDate: onSelectDate
    });
  })))));
};

Month.propTypes = {
  now: _propTypes["default"].instanceOf(_persianDate["default"]),
  selected: _propTypes["default"].instanceOf(_persianDate["default"]),
  persianDate: _propTypes["default"].instanceOf(_persianDate["default"]),
  locale: _propTypes["default"].oneOf(['en', 'fa']),
  goPrev: _propTypes["default"].func,
  goNext: _propTypes["default"].func,
  goToToday: _propTypes["default"].func,
  hasHeader: _propTypes["default"].bool,
  onSelectDate: _propTypes["default"].func,
  onSelectYear: _propTypes["default"].func,
  hasTodayLink: _propTypes["default"].bool
};
var _default = Month;
exports["default"] = _default;