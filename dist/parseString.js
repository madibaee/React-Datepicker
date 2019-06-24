"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _persianDate = _interopRequireDefault(require("persian-date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(input, persianDate, format) {
  var isPersian = persianDate.formatNumber();
  var tokens = /([[^[]*])|(\\)?(Mo|MM?M?M?|Do|DD?D?D?|dddddd?|ddddd?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|X|LT|ll?l?l?|LL?L?L?)/g;
  var format = format || 'YYYY-MM-DD';
  var pattern = format.replace(tokens, replaceFunction);
  pattern = new RegExp(pattern, 'gi');
  var params = pattern.exec(input);
  var output = {};

  if (params) {
    format = format.match(tokens);
    format = rearrangeFormat(format);

    for (var i = 0; i < format.length; i++) {
      var value = camelize(params[i + 1]);
      output = _objectSpread({}, output, parse(toLatinNumber(value), format[i]));
    }

    _persianDate["default"].calendarType = persianDate.calendarType;
    _persianDate["default"].localeType = persianDate.localeType;
    return new _persianDate["default"]([output.year, output.month, output.date]);
  } else {
    return;
  }

  function digit(min, max) {
    return "([\u06F0-\u06F9\\d]{".concat(min).concat(max ? ',' + max : '', "})");
  }

  function toLatinNumber(string) {
    var enZero = '0'.charCodeAt(0);
    var faZero = '۰'.charCodeAt(0);
    return string.replace(/[۰-۹]/g, function (c) {
      return String.fromCharCode(c.charCodeAt(0) - faZero + enZero);
    });
  }

  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      return index === 0 ? match.toUpperCase() : match.toLowerCase();
    });
  }

  function replaceFunction(token) {
    switch (token) {
      // AM/PM
      case 'a':
        {
          if (isPersian) return '(ق ظ|ب ظ)';else return '(AM|PM)';
        }
      // Hours (Int)

      case 'H':
        {
          return digit(1, 2);
        }

      case 'HH':
        {
          return digit(2);
        }

      case 'h':
        {
          return digit(1, 2);
        }

      case 'hh':
        {
          return digit(2);
        }
      // Minutes

      case 'm':
        {
          return digit(1, 2);
        }
      // Two Digit Minutes

      case 'mm':
        {
          return digit(2);
        }
      // Second

      case 's':
        {
          return digit(1, 2);
        }

      case 'ss':
        {
          return digit(2);
        }
      // Day (Int)

      case 'D':
        {
          return digit(1, 2);
        }
      // Return Two Digit

      case 'DD':
        {
          return digit(2);
        }
      // Return day Of Year

      case 'DDD':
        {
          return digit(1, 3);
        }
      // Return day Of week

      case 'd':
        {
          return digit(1);
        }
      // Return week day name abbr

      case 'ddd':
        {
          return "(".concat(persianDate.rangeName().weekdaysMin.join('|'), ")");
        }

      case 'dddd':
        {
          return "(".concat(persianDate.rangeName().weekdays.join('|'), ")");
        }
      // Return Persian Day Name

      case 'ddddd':
        {
          return "(".concat(persianDate.rangeName().persianDaysName.join('|'), ")");
        }

      case 'w':
        {
          return digit(1, 2);
        }
      // Return Persian Day Name

      case 'ww':
        {
          return digit(2);
        }
      // Month  (Int)

      case 'M':
        {
          return digit(1, 2);
        }
      // Two Digit Month (Str)

      case 'MM':
        {
          return digit(2);
        }
      // Abbr String of Month (Str)

      case 'MMM':
        {
          return "(".concat(persianDate.rangeName().monthsShort.join('|'), ")");
        }
      // Full String name of Month (Str)

      case 'MMMM':
        {
          return "(".concat(persianDate.rangeName().months.join('|'), ")");
        }
      // Year
      // Two Digit Year (Str)

      case 'YY':
        {
          return digit(2);
        }
      // Full Year (Int)

      case 'YYYY':
        {
          return digit(4);
        }
      // 8:30 PM

      case 'LT':
        {
          return "(?:".concat(digit(1, 2), ":").concat(digit(1, 2), "(\u0642 \u0638|\u0628 \u0638|AM|PM))");
        }
      // 09/04/1986

      case 'L':
        {
          return "(?:".concat(digit(4), "/").concat(digit(2), "/").concat(digit(2), ")");
        }
      // 9/4/1986

      case 'l':
        {
          return "(?:".concat(digit(4), "/").concat(digit(1, 2), "/").concat(digit(1, 2), ")");
        }
      // September 4th 1986

      case 'LL':
        {
          return "(?:(".concat(persianDate.rangeName().months.join('|'), ") ").concat(digit(2), " ").concat(digit(4), ")");
        }
      // Sep 4 1986

      case 'll':
        {
          return "(?:(".concat(persianDate.rangeName().monthsShort.join('|'), ") ").concat(digit(2), " ").concat(digit(4), ")");
        }
      //September 4th 1986 8:30 PM

      case 'LLL':
        {
          return "(?:(".concat(persianDate.rangeName().months.join('|'), ") ").concat(digit(4), " ").concat(digit(2), "   ").concat(digit(1, 2), ":").concat(digit(1, 2), "  (\u0642 \u0638|\u0628 \u0638|AM|PM))");
        }
      // Sep 4 1986 8:30 PM

      case 'lll':
        {
          return "(?:(".concat(persianDate.rangeName().monthsShort.join('|'), ") ").concat(digit(4), " ").concat(digit(2), "   ").concat(digit(1, 2), ":").concat(digit(1, 2), "  (\u0642 \u0638|\u0628 \u0638|AM|PM))");
        }
      //Thursday, September 4th 1986 8:30 PM

      case 'LLLL':
        {
          return "(?:(".concat(persianDate.rangeName().weekdays.join('|'), ") ").concat(digit(1, 2), " (").concat(persianDate.rangeName().months.join('|'), ") ").concat(digit(4), "  ").concat(digit(1, 2), ":").concat(digit(1, 2), "  (\u0642 \u0638|\u0628 \u0638|AM|PM))");
        }
      // Thu, Sep 4 1986 8:30 PM

      case 'llll':
        {
          return "(?:(".concat(persianDate.rangeName().weekdaysMin.join('|'), ") ").concat(digit(1, 2), " ((").concat(persianDate.rangeName().monthsShort.join('|'), ")) ").concat(digit(4), "  ").concat(digit(1, 2), ":").concat(digit(1, 2), "  (\u0642 \u0638|\u0628 \u0638|AM|PM))");
        }
    }
  }

  function rearrangeFormat(format) {
    for (var i = 0; i < format.length; i++) {
      switch (format[i]) {
        case 'LT':
          format[i] = ['H', 'm', 'a'];
          break;

        case 'L':
          format[i] = ['YYYY', 'MM', 'DD'];
          break;

        case 'l':
          format[i] = ['YYYY', 'M', 'D'];
          break;

        case 'LL':
          format[i] = ['MMMM', 'DD', 'YYYY'];
          break;

        case 'll':
          format[i] = ['MMM', 'DD', 'YYYY'];
          break;

        case 'LLL':
          format[i] = ['MMMM', 'YYYY', 'DD', 'H', 'm', 'a'];
          break;

        case 'lll':
          format[i] = ['MMM', 'YYYY', 'DD', 'H', 'm', 'a'];
          break;

        case 'LLLL':
          format[i] = ['dddd', 'D', 'MMMM', 'YYYY', 'H', 'm', 'a'];
          break;

        case 'llll':
          format[i] = ['ddd', 'D', 'MMM', 'YYYY', 'H', 'm', 'a'];
          break;
      }
    }

    return format.toString().split(',');
  }

  function parse(value, token) {
    switch (token) {
      case 'a':
        return {
          a: parseInt(value)
        };

      case 'H':
        return {
          hour: parseInt(value)
        };

      case 'HH':
        return {
          hour: parseInt(value)
        };

      case 'h':
        return {
          hourA: parseInt(value)
        };

      case 'hh':
        return {
          hourA: parseInt(value)
        };

      case 'm':
        return {
          minute: parseInt(value)
        };

      case 'mm':
        return {
          minute: parseInt(value)
        };

      case 's':
        return {
          second: parseInt(value)
        };

      case 'ss':
        return {
          second: parseInt(value)
        };

      case 'D':
        return {
          date: parseInt(value)
        };

      case 'DD':
        return {
          date: parseInt(value)
        };

      case 'DDD':
        return {
          dayYear: parseInt(value)
        };

      case 'd':
        return {
          day: parseInt(value)
        };

      case 'ddd':
        return {
          day: persianDate.rangeName().weekdaysMin.indexOf(value) + 1
        };

      case 'dddd':
        return {
          day: persianDate.rangeName().weekdays.indexOf(value) + 1
        };

      case 'ddddd':
        return {
          date: persianDate.rangeName().persianDaysName.indexOf(value) + 1
        };

      case 'w':
        return {
          weak: parseInt(value)
        };

      case 'ww':
        return {
          weak: parseInt(value)
        };

      case 'M':
        return {
          month: parseInt(value)
        };

      case 'MM':
        return {
          month: parseInt(value)
        };

      case 'MMM':
        return {
          month: persianDate.rangeName().monthsShort.indexOf(value) + 1
        };

      case 'MMMM':
        return {
          month: persianDate.rangeName().months.indexOf(value) + 1
        };

      case 'YY':
        return {
          year: parseInt(value)
        };

      case 'YYYY':
        return {
          year: parseInt(value)
        };
    }
  }
};

exports["default"] = _default;