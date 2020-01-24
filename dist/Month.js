'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _MonthRow = _interopRequireDefault(require('./MonthRow'))

var _TodayInfo = _interopRequireDefault(require('./TodayInfo'))

var _translations = _interopRequireDefault(require('./translations'))

var _ChevronRightIcon = _interopRequireDefault(
  require('mdi-react/ChevronRightIcon')
)

var _ChevronLeftIcon = _interopRequireDefault(
  require('mdi-react/ChevronLeftIcon')
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  )
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance')
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter)
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i]
    }
    return arr2
  }
}

var computeRows = function computeRows(persianDate) {
  var days = persianDate.daysInMonth()
  var header = 8 - persianDate.day()
  var footer = (days - header) % 7
  var body = days - header - footer
  return body / 7 + (header === 0 ? 0 : 1) + (footer === 0 ? 0 : 1)
}

var _default = function _default(_ref) {
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
    hasTodayLink = _ref.hasTodayLink
  var messages = _translations['default'][locale]

  var chevronIcon = function chevronIcon(dir) {
    var props = {
      onClick: dir === 'back' ? goPrev : goNext,
      size: 45
    }
    var isRight =
      (locale === 'fa' && dir === 'back') || (locale === 'en' && dir === 'next')
    var isLeft =
      (locale === 'en' && dir === 'back') || (locale === 'fa' && dir === 'next')

    if (isRight) {
      return _react['default'].createElement(
        'span',
        {
          className: 'chevron'
        },
        _react['default'].createElement(_ChevronRightIcon['default'], props)
      )
    } else if (isLeft) {
      return _react['default'].createElement(
        'span',
        {
          className: 'chevron'
        },
        _react['default'].createElement(_ChevronLeftIcon['default'], props)
      )
    }
  }

  var showTodayLink = !now.isSameMonth(persianDate) && hasTodayLink
  return _react['default'].createElement(
    'div',
    {
      className: 'picker'
    },
    _react['default'].createElement(
      'div',
      {
        className: hasHeader ? 'header rich-header' : 'header'
      },
      hasHeader
        ? _react['default'].createElement(_TodayInfo['default'], {
            date: selected
          })
        : null,
      chevronIcon('back'),
      _react['default'].createElement(
        'span',
        {
          onClick: onSelectYear
        },
        persianDate.format('MMMM YYYY')
      ),
      showTodayLink
        ? _react['default'].createElement(
            'span',
            {
              className: 'today-chevron'
            },
            _react['default'].createElement(
              'span',
              {
                className: 'go-to-today',
                onClick: goToToday
              },
              messages.today
            ),
            chevronIcon('next')
          )
        : chevronIcon('next')
    ),
    _react['default'].createElement(
      'div',
      {
        className: 'body'
      },
      _react['default'].createElement(
        'table',
        null,
        _react['default'].createElement(
          'thead',
          null,
          _react['default'].createElement(
            'tr',
            {
              className: 'week-days'
            },
            persianDate.rangeName().weekdaysMin.map(function(name, i) {
              return _react['default'].createElement(
                'th',
                {
                  key: i
                },
                name
              )
            })
          )
        ),
        _react['default'].createElement(
          'tbody',
          null,
          _toConsumableArray(Array(computeRows(persianDate))).map(function(
            _,
            i
          ) {
            return _react['default'].createElement(_MonthRow['default'], {
              key: i,
              row: i,
              persianDate: persianDate,
              now: now,
              selected: selected,
              onSelectDate: onSelectDate
            })
          })
        )
      )
    )
  )
}

exports['default'] = _default
