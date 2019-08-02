"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _persianDate = _interopRequireDefault(require("persian-date"));

var _react2 = _interopRequireDefault(require("@mdi/react"));

var _js = require("@mdi/js");

var _Month = _interopRequireDefault(require("./Month"));

var _Year = _interopRequireDefault(require("./Year"));

var _Decade = _interopRequireDefault(require("./Decade"));

var _Century = _interopRequireDefault(require("./Century"));

var _parseString = _interopRequireDefault(require("./parseString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container =
/*#__PURE__*/
function (_Component) {
  _inherits(Container, _Component);

  _createClass(Container, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var now = new _persianDate["default"]();
      now.toCalendar(nextProps.calendar);
      now.toLocale(nextProps.locale);

      if (nextProps.locale !== prevState.locale || nextProps.calendar !== prevState.calendar) {
        return _objectSpread({
          locale: nextProps.locale,
          calendar: nextProps.calendar,
          now: now,
          persianDate: now.startOf('month'),
          selectedDate: now
        }, nextProps);
      }

      return nextProps;
    }
  }]);

  function Container(props) {
    var _this;

    _classCallCheck(this, Container);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Container).call(this, props));
    var now = new _persianDate["default"]();
    now.toCalendar(props.calendar);
    now.toLocale(props.locale);
    var persianDate = now.startOf('month');
    var format = props.format || 'l';
    _this.state = {
      locale: props.locale || 'en',
      calendar: props.calendar || 'gregorian',
      now: now,
      persianDate: persianDate,
      selectedDate: now,
      view: 'month',
      format: format,
      updateInputValue: true,
      isOpen: false,
      hasHeader: props.hasHeader || false,
      inputName: props.inputName,
      hiddenInput: props.hiddenInput || false,
      hiddenInputFormat: props.hiddenInputFormat || 'YYYY-MM-DD',
      hiddenInputLocale: props.hiddenInputLocale || 'en',
      hiddenInputCalendar: props.hiddenInputCalendar || 'gregorian',
      todayLink: props.todayLink || false
    };
    _this.dateInput = (0, _react.createRef)();
    _this.openCalendar = _this.openCalendar.bind(_assertThisInitialized(_this));
    _this.closeCalendar = _this.closeCalendar.bind(_assertThisInitialized(_this));
    _this.toggleCalendar = _this.toggleCalendar.bind(_assertThisInitialized(_this));
    _this.setDate = _this.setDate.bind(_assertThisInitialized(_this));
    _this.setMonth = _this.setMonth.bind(_assertThisInitialized(_this));
    _this.setYear = _this.setYear.bind(_assertThisInitialized(_this));
    _this.setDecade = _this.setDecade.bind(_assertThisInitialized(_this));
    _this.goToNextMonth = _this.goToNextMonth.bind(_assertThisInitialized(_this));
    _this.goToPrevMonth = _this.goToPrevMonth.bind(_assertThisInitialized(_this));
    _this.goToPrevYear = _this.goToPrevYear.bind(_assertThisInitialized(_this));
    _this.goToNextYear = _this.goToNextYear.bind(_assertThisInitialized(_this));
    _this.goToNextDecade = _this.goToNextDecade.bind(_assertThisInitialized(_this));
    _this.goToPrevDecade = _this.goToPrevDecade.bind(_assertThisInitialized(_this));
    _this.goToPrevCentury = _this.goToPrevCentury.bind(_assertThisInitialized(_this));
    _this.goToNextCentury = _this.goToNextCentury.bind(_assertThisInitialized(_this));
    _this.showYear = _this.showYear.bind(_assertThisInitialized(_this));
    _this.showDecade = _this.showDecade.bind(_assertThisInitialized(_this));
    _this.showCentury = _this.showCentury.bind(_assertThisInitialized(_this));
    _this.goToToday = _this.goToToday.bind(_assertThisInitialized(_this));
    _this.parseDate = _this.parseDate.bind(_assertThisInitialized(_this));
    _this.onBlurInput = _this.onBlurInput.bind(_assertThisInitialized(_this));
    _this.onFocusInput = _this.onFocusInput.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setInputValue();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setInputValue();
    }
  }, {
    key: "setInputValue",
    value: function setInputValue() {
      if (this.state.updateInputValue) {
        this.dateInput.current.value = this.state.selectedDate.format(this.state.format);
      }
    }
  }, {
    key: "updateInputValue",
    value: function updateInputValue() {
      this.setState({
        updateInputValue: true
      });
    }
  }, {
    key: "openCalendar",
    value: function openCalendar() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "closeCalendar",
    value: function closeCalendar() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "toggleCalendar",
    value: function toggleCalendar() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "monthAttributes",
    value: function monthAttributes() {
      return {
        locale: this.state.locale,
        persianDate: this.state.persianDate,
        now: this.state.now,
        selected: this.state.selectedDate,
        onSelectDate: this.setDate,
        goNext: this.goToNextMonth,
        goPrev: this.goToPrevMonth,
        onSelectYear: this.showYear,
        goToToday: this.goToToday,
        hasHeader: this.state.hasHeader,
        todayLink: this.state.todayLink
      };
    }
  }, {
    key: "yearAttributes",
    value: function yearAttributes() {
      return {
        locale: this.state.locale,
        persianDate: this.state.persianDate,
        onSelectMonth: this.setMonth,
        goNext: this.goToNextYear,
        goPrev: this.goToPrevYear,
        onSelectDecade: this.showDecade
      };
    }
  }, {
    key: "decadeAttributes",
    value: function decadeAttributes() {
      return {
        locale: this.state.locale,
        year: this.state.persianDate.year(),
        onSelectYear: this.setYear,
        goNext: this.goToNextDecade,
        goPrev: this.goToPrevDecade,
        onSelectCentury: this.showCentury
      };
    }
  }, {
    key: "centuryAttributes",
    value: function centuryAttributes() {
      return {
        locale: this.state.locale,
        year: this.state.persianDate.year(),
        onSelectDecade: this.setDecade,
        goNext: this.goToNextCentury,
        goPrev: this.goToPrevCentury
      };
    }
  }, {
    key: "goToToday",
    value: function goToToday() {
      this.setState({
        persianDate: this.state.now.startOf('month'),
        selectedDate: this.state.now
      });
    }
  }, {
    key: "setDate",
    value: function setDate(event) {
      var day = event.target.getAttribute('data-day');
      var selectedDate = this.state.persianDate.add('d', day);
      this.setState({
        persianDate: selectedDate.startOf('month'),
        selectedDate: selectedDate
      });
      this.updateInputValue();
      this.closeCalendar();
    }
  }, {
    key: "setMonth",
    value: function setMonth(event) {
      var month = event.target.getAttribute('data-month');
      var persianDate = new _persianDate["default"]([this.state.persianDate.year(), month]);
      this.setState({
        persianDate: persianDate,
        view: 'month'
      });
    }
  }, {
    key: "setYear",
    value: function setYear(event) {
      var year = event.target.getAttribute('data-year');
      var persianDate = new _persianDate["default"]([year]);
      this.setState({
        persianDate: persianDate,
        view: 'year'
      });
    }
  }, {
    key: "setDecade",
    value: function setDecade(event) {
      var year = event.target.getAttribute('data-decade');
      var persianDate = new _persianDate["default"]([year]);
      this.setState({
        persianDate: persianDate,
        view: 'decade'
      });
    }
  }, {
    key: "goToNextMonth",
    value: function goToNextMonth() {
      var persianDate = this.state.persianDate.startOf('month').add('M', 1);
      this.setState({
        persianDate: persianDate
      });
    }
  }, {
    key: "goToPrevMonth",
    value: function goToPrevMonth() {
      var persianDate = this.state.persianDate;
      persianDate = persianDate.add('d', -2);
      this.setState({
        persianDate: new _persianDate["default"]([persianDate.year(), persianDate.month()])
      });
    }
  }, {
    key: "goToNextYear",
    value: function goToNextYear() {
      var persianDate = this.state.persianDate.startOf('year').add('y', 1);
      this.setState({
        persianDate: persianDate
      });
    }
  }, {
    key: "goToPrevYear",
    value: function goToPrevYear() {
      var persianDate = this.state.persianDate;
      persianDate = persianDate.startOf('year').add('d', -1);
      this.setState({
        persianDate: persianDate
      });
    }
  }, {
    key: "goToNextDecade",
    value: function goToNextDecade() {
      var persianDate = this.state.persianDate.startOf('year').add('y', 10);
      this.setState({
        persianDate: persianDate
      });
    }
  }, {
    key: "goToPrevDecade",
    value: function goToPrevDecade() {
      var persianDate = new _persianDate["default"]([this.state.persianDate.year() - 10]);
      this.setState({
        persianDate: persianDate
      });
    }
  }, {
    key: "goToNextCentury",
    value: function goToNextCentury() {
      var persianDate = this.state.persianDate.startOf('year').add('y', 100);
      this.setState({
        persianDate: persianDate
      });
    }
  }, {
    key: "goToPrevCentury",
    value: function goToPrevCentury() {
      var persianDate = new _persianDate["default"]([this.state.persianDate.year() - 100]);
      this.setState({
        persianDate: persianDate
      });
    }
  }, {
    key: "showYear",
    value: function showYear() {
      this.setState({
        view: 'year'
      });
    }
  }, {
    key: "showDecade",
    value: function showDecade() {
      this.setState({
        view: 'decade'
      });
    }
  }, {
    key: "showCentury",
    value: function showCentury() {
      this.setState({
        view: 'century'
      });
    }
  }, {
    key: "parseDate",
    value: function parseDate(event) {
      var date = (0, _parseString["default"])(event.target.value, this.state.persianDate, this.state.format);

      if (date) {
        this.setState({
          selectedDate: date,
          persianDate: date.startOf('month'),
          updateInputValue: false
        });
      }
    }
  }, {
    key: "onBlurInput",
    value: function onBlurInput() {
      this.updateInputValue();
    }
  }, {
    key: "onFocusInput",
    value: function onFocusInput() {
      this.setState({
        updateInputValue: false
      });
      this.openCalendar();
    }
  }, {
    key: "inputAttributes",
    value: function inputAttributes() {
      return {
        className: "date-input",
        type: "text",
        name: this.state.inputName,
        spellCheck: false,
        onChange: this.parseDate,
        onFocus: this.onFocusInput,
        onBlur: this.onBlurInput,
        ref: this.dateInput
      };
    }
  }, {
    key: "hiddenInputAttributes",
    value: function hiddenInputAttributes() {
      var date = new _persianDate["default"](this.state.selectedDate);
      date.toLocale(this.state.hiddenInputLocale);
      date.toCalendar(this.state.hiddenInputCalendar);
      return {
        type: "hidden",
        name: this.state.inputName,
        value: date.format(this.state.hiddenInputFormat)
      };
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "react-persian-datepicker",
        dir: this.state.locale === 'fa' ? "rtl" : ""
      }, React.createElement("div", {
        className: "input"
      }, React.createElement(_react2["default"], {
        className: "input-icon",
        path: _js.mdiCalendar,
        onClick: this.toggleCalendar
      }), React.createElement("input", this.inputAttributes()), this.state.hiddenInput ? React.createElement("input", this.hiddenInputAttributes()) : ''), this.state.isOpen ? this.state.view === 'month' ? React.createElement(_Month["default"], this.monthAttributes()) : this.state.view === 'year' ? React.createElement(_Year["default"], this.yearAttributes()) : this.state.view === 'decade' ? React.createElement(_Decade["default"], this.decadeAttributes()) : this.state.view === 'century' ? React.createElement(_Century["default"], this.centuryAttributes()) : '' : '');
    }
  }]);

  return Container;
}(_react.Component);

var _default = Container;
exports["default"] = _default;