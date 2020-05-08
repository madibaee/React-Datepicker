"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _persianDate = _interopRequireDefault(require("persian-date"));

var _react = _interopRequireWildcard(require("react"));

var _Icons = require("./Icons");

var _Month = _interopRequireDefault(require("./Month"));

var _Year = _interopRequireDefault(require("./Year"));

var _Decade = _interopRequireDefault(require("./Decade"));

var _Century = _interopRequireDefault(require("./Century"));

var _parseString = _interopRequireDefault(require("./parseString"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Datepicker = function Datepicker(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'gregorian' : _ref$type,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en' : _ref$locale,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? 'l' : _ref$format,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function (x) {
    return x;
  } : _ref$onChange,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? function (x) {
    return x;
  } : _ref$onFocus,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? function (x) {
    return x;
  } : _ref$onBlur,
      _ref$onSetDate = _ref.onSetDate,
      onSetDate = _ref$onSetDate === void 0 ? function (x) {
    return x;
  } : _ref$onSetDate,
      _ref$onGoToToday = _ref.onGoToToday,
      onGoToToday = _ref$onGoToToday === void 0 ? function (x) {
    return x;
  } : _ref$onGoToToday,
      _ref$onSetMonth = _ref.onSetMonth,
      onSetMonth = _ref$onSetMonth === void 0 ? function (x) {
    return x;
  } : _ref$onSetMonth,
      _ref$onSetYear = _ref.onSetYear,
      onSetYear = _ref$onSetYear === void 0 ? function (x) {
    return x;
  } : _ref$onSetYear,
      _ref$onSetDecade = _ref.onSetDecade,
      onSetDecade = _ref$onSetDecade === void 0 ? function (x) {
    return x;
  } : _ref$onSetDecade,
      _ref$onShowYear = _ref.onShowYear,
      onShowYear = _ref$onShowYear === void 0 ? function (x) {
    return x;
  } : _ref$onShowYear,
      _ref$onShowDecade = _ref.onShowDecade,
      onShowDecade = _ref$onShowDecade === void 0 ? function (x) {
    return x;
  } : _ref$onShowDecade,
      _ref$onShowCentury = _ref.onShowCentury,
      onShowCentury = _ref$onShowCentury === void 0 ? function (x) {
    return x;
  } : _ref$onShowCentury,
      _ref$inputName = _ref.inputName,
      inputName = _ref$inputName === void 0 ? 'date' : _ref$inputName,
      _ref$hasHeader = _ref.hasHeader,
      hasHeader = _ref$hasHeader === void 0 ? false : _ref$hasHeader,
      _ref$hasTodayLink = _ref.hasTodayLink,
      hasTodayLink = _ref$hasTodayLink === void 0 ? false : _ref$hasTodayLink,
      _ref$hasHiddenInput = _ref.hasHiddenInput,
      hasHiddenInput = _ref$hasHiddenInput === void 0 ? false : _ref$hasHiddenInput,
      _ref$hiddenInputLocal = _ref.hiddenInputLocale,
      hiddenInputLocale = _ref$hiddenInputLocal === void 0 ? 'en' : _ref$hiddenInputLocal,
      _ref$hiddenInputType = _ref.hiddenInputType,
      hiddenInputType = _ref$hiddenInputType === void 0 ? 'gregorian' : _ref$hiddenInputType,
      _ref$hiddenInputForma = _ref.hiddenInputFormat,
      hiddenInputFormat = _ref$hiddenInputForma === void 0 ? 'l' : _ref$hiddenInputForma;
  var now = new _persianDate["default"]().toCalendar(type).toLocale(locale);
  var VIEW_MODES = {
    MONTH: 'month',
    YEAR: 'year',
    DECADE: 'decade',
    CENTURY: 'century'
  };

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      dateState = _useState4[0],
      setDateState = _useState4[1];

  var _useState5 = (0, _react.useState)(VIEW_MODES.MONTH),
      _useState6 = _slicedToArray(_useState5, 2),
      viewMode = _useState6[0],
      setViewMode = _useState6[1];

  var inputRef = (0, _react.useRef)(null);
  var datepickerRef = (0, _react.useRef)(null);
  var canUpdateInputRef = (0, _react.useRef)(true);
  var selectedDateRef = (0, _react.useRef)(now);
  var dateInstaceRef = (0, _react.useRef)(now.startOf('month'));
  var dir = locale === 'fa' ? 'rtl' : 'ltr';

  var openCalendar = function openCalendar() {
    return setIsOpen(true);
  };

  var closeCalendar = function closeCalendar() {
    return setIsOpen(false);
  };

  var toggleCalendar = function toggleCalendar() {
    return setIsOpen(!isOpen);
  };

  var forceUpdate = (0, _react.useCallback)(function () {
    return setDateState({});
  }, []);
  (0, _react.useEffect)(function () {
    setInputValue();
  }, [selectedDateRef.current, dateState]);
  (0, _react.useEffect)(function () {
    var handleClick = function handleClick(event) {
      var dom = event.target;

      if (!datepickerRef.current.contains(dom) && document.contains(dom)) {
        closeCalendar();
      }
    };

    document.addEventListener('click', handleClick);
    return function () {
      return document.removeEventListener('click', handleClick);
    };
  }, [datepickerRef.current]);
  (0, _react.useEffect)(function () {
    updateDateInctanse(dateInstaceRef.current.toCalendar(type).startOf('month'));
    selectedDateRef.current.toCalendar(type);
  }, [type]);
  (0, _react.useEffect)(function () {
    updateDateInctanse(dateInstaceRef.current.toLocale(locale));
    selectedDateRef.current.toLocale(locale);
  }, [locale]);
  (0, _react.useEffect)(function () {
    setInputValue();
  }, [format]);

  var updateDateInctanse = function updateDateInctanse(persianDate) {
    forceUpdate();
    dateInstaceRef.current = persianDate;
  };

  var setInputValue = function setInputValue() {
    if (canUpdateInputRef.current) {
      inputRef.current.value = selectedDateRef.current.format(format);
    }
  };

  var parseDate = function parseDate(value) {
    var date = (0, _parseString["default"])(value, dateInstaceRef.current, format);

    if (date) {
      selectedDateRef.current = date;
      updateDateInctanse(date.startOf('month'));
    }
  };

  var onChangeInput = function onChangeInput(event) {
    var value = event.target.value;
    parseDate(value);
    onChange(value);
  };

  var onFocusInput = function onFocusInput(event) {
    canUpdateInputRef.current = false;
    openCalendar();
    onFocus(event.target.value);
  };

  var onBlurInput = function onBlurInput(event) {
    canUpdateInputRef.current = true;
    setInputValue();
    onBlur(event.target.value);
  };

  var setDate = function setDate(event) {
    var day = event.target.getAttribute('data-day');
    var selectedDate = dateInstaceRef.current.startOf('month').add('d', day);
    selectedDateRef.current = selectedDate;
    updateDateInctanse(selectedDate.startOf('month'));
    canUpdateInputRef.current = true;
    setInputValue();
    closeCalendar();
    onSetDate(selectedDate.format(format));
  };

  var goToToday = function goToToday() {
    selectedDateRef.current = now;
    updateDateInctanse(now.startOf('month'));
    onGoToToday(now.format(format));
  };

  var setMonth = function setMonth(event) {
    var month = event.target.getAttribute('data-month');
    var date = new _persianDate["default"]([dateInstaceRef.current.year(), month]);
    updateDateInctanse(date);
    setViewMode(VIEW_MODES.MONTH);
    onSetMonth(event);
  };

  var setYear = function setYear(event) {
    var year = event.target.getAttribute('data-year');
    var date = new _persianDate["default"]([year]);
    updateDateInctanse(date);
    setViewMode(VIEW_MODES.YEAR);
    onSetYear(event);
  };

  var setDecade = function setDecade(event) {
    var year = event.target.getAttribute('data-decade');
    var date = new _persianDate["default"]([year]);
    updateDateInctanse(date);
    setViewMode(VIEW_MODES.DECADE);
    onSetDecade(event);
  };

  var goToNextMonth = function goToNextMonth() {
    updateDateInctanse(dateInstaceRef.current.startOf('month').add('M', 1));
  };

  var goToPrevMonth = function goToPrevMonth() {
    var date = dateInstaceRef.current.add('d', -2);
    updateDateInctanse(new _persianDate["default"]([date.year(), date.month()]));
  };

  var goToNextYear = function goToNextYear() {
    updateDateInctanse(dateInstaceRef.current.startOf('year').add('y', 1));
  };

  var goToPrevYear = function goToPrevYear() {
    updateDateInctanse(dateInstaceRef.current.startOf('year').add('d', -1));
  };

  var goToNextDecade = function goToNextDecade() {
    updateDateInctanse(dateInstaceRef.current.startOf('year').add('y', 10));
  };

  var goToPrevDecade = function goToPrevDecade() {
    updateDateInctanse(new _persianDate["default"]([dateInstaceRef.current.year() - 10]));
  };

  var goToNextCentury = function goToNextCentury() {
    updateDateInctanse(dateInstaceRef.current.startOf('year').add('y', 100));
  };

  var goToPrevCentury = function goToPrevCentury() {
    updateDateInctanse(new _persianDate["default"]([dateInstaceRef.current.year() - 100]));
  };

  var showYear = function showYear() {
    setViewMode(VIEW_MODES.YEAR);
    onShowYear();
  };

  var showDecade = function showDecade() {
    setViewMode(VIEW_MODES.DECADE);
    onShowDecade();
  };

  var showCentury = function showCentury() {
    setViewMode(VIEW_MODES.CENTURY);
    onShowCentury();
  };

  var inputAttributes = {
    className: 'date-input',
    type: 'text',
    name: inputName,
    spellCheck: false,
    onChange: onChangeInput,
    onFocus: onFocusInput,
    onBlur: onBlurInput,
    ref: inputRef
  };
  var hiddenInputAttributes = {
    type: 'hidden',
    name: inputName,
    value: new _persianDate["default"](selectedDateRef.current).toLocale(hiddenInputLocale).toCalendar(hiddenInputType).format(hiddenInputFormat)
  };
  var commonAttributes = {
    now: now,
    locale: locale,
    year: dateInstaceRef.current.year(),
    selected: selectedDateRef.current,
    persianDate: dateInstaceRef.current
  };
  var monthAttributes = {
    onSelectDate: setDate,
    goNext: goToNextMonth,
    goPrev: goToPrevMonth,
    onSelectYear: showYear,
    goToToday: goToToday,
    hasHeader: hasHeader,
    hasTodayLink: hasTodayLink
  };
  var yearAttributes = {
    onSelectMonth: setMonth,
    goNext: goToNextYear,
    goPrev: goToPrevYear,
    onSelectDecade: showDecade
  };
  var decadeAttributes = {
    onSelectYear: setYear,
    goNext: goToNextDecade,
    goPrev: goToPrevDecade,
    onSelectCentury: showCentury
  };
  var centuryAttributes = {
    onSelectDecade: setDecade,
    goNext: goToNextCentury,
    goPrev: goToPrevCentury
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-persian-datepicker react-persian-datepicker-".concat(dir),
    ref: datepickerRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "input"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.CalendarIcon, {
    className: "input-icon",
    onClick: toggleCalendar
  }), /*#__PURE__*/_react["default"].createElement("input", inputAttributes), hasHiddenInput && /*#__PURE__*/_react["default"].createElement("input", hiddenInputAttributes)), isOpen ? viewMode === VIEW_MODES.MONTH ? /*#__PURE__*/_react["default"].createElement(_Month["default"], _extends({}, commonAttributes, monthAttributes)) : viewMode === VIEW_MODES.YEAR ? /*#__PURE__*/_react["default"].createElement(_Year["default"], _extends({}, commonAttributes, yearAttributes)) : viewMode === VIEW_MODES.DECADE ? /*#__PURE__*/_react["default"].createElement(_Decade["default"], _extends({}, commonAttributes, decadeAttributes)) : viewMode === VIEW_MODES.CENTURY ? /*#__PURE__*/_react["default"].createElement(_Century["default"], _extends({}, commonAttributes, centuryAttributes)) : null : null);
};

Datepicker.propTypes = {
  type: _propTypes["default"].oneOf(['gregorian', 'persian']),
  locale: _propTypes["default"].oneOf(['en', 'fa']),
  format: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onSetDate: _propTypes["default"].func,
  onGoToToday: _propTypes["default"].func,
  onSetMonth: _propTypes["default"].func,
  onSetYear: _propTypes["default"].func,
  onSetDecade: _propTypes["default"].func,
  onShowYear: _propTypes["default"].func,
  onShowDecade: _propTypes["default"].func,
  onShowCentury: _propTypes["default"].func,
  inputName: _propTypes["default"].string,
  hasHeader: _propTypes["default"].bool,
  hasTodayLink: _propTypes["default"].bool,
  hasHiddenInput: _propTypes["default"].bool,
  hiddenInputLocale: _propTypes["default"].oneOf(['en', 'fa']),
  hiddenInputType: _propTypes["default"].oneOf(['gregorian', 'persian']),
  hiddenInputFormat: _propTypes["default"].string
};
var _default = Datepicker;
exports["default"] = _default;