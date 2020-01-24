'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _persianDate = _interopRequireDefault(require('persian-date'))

var _DecadeRow = _interopRequireDefault(require('./DecadeRow'))

var _ChevronLeftIcon = _interopRequireDefault(
  require('mdi-react/ChevronLeftIcon')
)

var _ChevronRightIcon = _interopRequireDefault(
  require('mdi-react/ChevronRightIcon')
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

var decade = function decade(year) {
  var firstYear = Math.floor(year / 10) * 10
  return new _persianDate['default']([firstYear])
}

var getCenturyString = function getCenturyString(year) {
  var date = decade(year)
  var start = date.format('YYYY')
  var end = date.add('y', 9).format('YYYY')
  return ''.concat(end, ' - ').concat(start)
}

var Decade = function Decade(_ref) {
  var locale = _ref.locale,
    year = _ref.year,
    onSelectYear = _ref.onSelectYear,
    goPrev = _ref.goPrev,
    goNext = _ref.goNext,
    onSelectCentury = _ref.onSelectCentury
  return _react['default'].createElement(
    'div',
    {
      className: 'picker'
    },
    _react['default'].createElement(
      'div',
      {
        className: 'header'
      },
      _react['default'].createElement(
        'span',
        {
          className: 'chevron',
          onClick: goPrev
        },
        locale === 'fa'
          ? _react['default'].createElement(_ChevronRightIcon['default'], null)
          : _react['default'].createElement(_ChevronLeftIcon['default'], null)
      ),
      _react['default'].createElement(
        'span',
        {
          onClick: onSelectCentury
        },
        getCenturyString(year)
      ),
      _react['default'].createElement(
        'span',
        {
          className: 'chevron',
          onClick: goNext
        },
        locale === 'fa'
          ? _react['default'].createElement(_ChevronLeftIcon['default'], null)
          : _react['default'].createElement(_ChevronRightIcon['default'], null)
      )
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
          'tbody',
          null,
          _toConsumableArray(Array(4)).map(function(_, i) {
            return _react['default'].createElement(_DecadeRow['default'], {
              key: i,
              row: i,
              persianDate: decade(year),
              onSelectYear: onSelectYear
            })
          })
        )
      )
    )
  )
}

var _default = Decade
exports['default'] = _default
