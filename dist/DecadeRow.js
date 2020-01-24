'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

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

var isActive = function isActive(i, j) {
  return i === 3 && j !== 1 ? false : true
}

var year = function year(i, j, persianDate) {
  var numbers = i * 3 + j
  return isActive(i, j) ? (i === 3 ? 9 : numbers) + persianDate.year() : ''
}

var yearString = function yearString(i, j, persianDate) {
  var numbers = i * 3 + j
  return isActive(i, j)
    ? persianDate.add('y', i === 3 ? 9 : numbers).format('YYYY')
    : ''
}

var _default = function _default(_ref) {
  var row = _ref.row,
    persianDate = _ref.persianDate,
    onSelectYear = _ref.onSelectYear
  return _react['default'].createElement(
    'tr',
    {
      className: 'decade-years'
    },
    _toConsumableArray(Array(3)).map(function(_, j) {
      return _react['default'].createElement(
        'td',
        {
          className: isActive(row, j) ? '' : 'disabled',
          key: j,
          'data-year': isActive(row, j) ? year(row, j, persianDate) : '',
          onClick: isActive(row, j) ? onSelectYear : function() {}
        },
        yearString(row, j, persianDate)
      )
    })
  )
}

exports['default'] = _default
