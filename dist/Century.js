'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _persianDate = _interopRequireDefault(require('persian-date'))

var _CenturyRow = _interopRequireDefault(require('./CenturyRow'))

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

var century = function century(year) {
  var firstYear = Math.floor(year / 100) * 100
  return new _persianDate['default']([firstYear])
}

var getCenturyString = function getCenturyString(year) {
  var date = century(year)
  var start = date.format('YYYY')
  var end = date.add('y', 99).format('YYYY')
  return ''.concat(end, ' - ').concat(start)
}

var Century = function Century(_ref) {
  var locale = _ref.locale,
    year = _ref.year,
    onSelectDecade = _ref.onSelectDecade,
    goPrev = _ref.goPrev,
    goNext = _ref.goNext
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
      _react['default'].createElement('span', null, getCenturyString(year)),
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
            return _react['default'].createElement(_CenturyRow['default'], {
              key: i,
              row: i,
              persianDate: century(year),
              onSelectDecade: onSelectDecade
            })
          })
        )
      )
    )
  )
}

var _default = Century
exports['default'] = _default
