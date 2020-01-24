'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

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

var Year = function Year(_ref) {
  var locale = _ref.locale,
    persianDate = _ref.persianDate,
    onSelectMonth = _ref.onSelectMonth,
    goPrev = _ref.goPrev,
    goNext = _ref.goNext,
    onSelectDecade = _ref.onSelectDecade
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
          onClick: onSelectDecade
        },
        persianDate.format('YYYY')
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
            return _react['default'].createElement(
              'tr',
              {
                key: i,
                className: 'year-months'
              },
              _toConsumableArray(Array(3)).map(function(__, j) {
                return _react['default'].createElement(
                  'td',
                  {
                    key: j,
                    'data-month': i * 3 + j + 1,
                    onClick: onSelectMonth
                  },
                  persianDate
                    .startOf('year')
                    .add('M', i * 3 + j)
                    .format('MMMM')
                )
              })
            )
          })
        )
      )
    )
  )
}

var _default = Year
exports['default'] = _default
