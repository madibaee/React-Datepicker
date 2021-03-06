import React from 'react'
import PropTypes from 'prop-types'
import PersianDate from 'persian-date'

const isActive = (i, j) => (i === 3 && j !== 1 ? false : true)

const year = (i, j, persianDate) => {
  const numbers = i * 3 + j
  return isActive(i, j) ? (i === 3 ? 9 : numbers) + persianDate.year() : ''
}

const yearString = (i, j, persianDate) => {
  var numbers = i * 3 + j
  return isActive(i, j)
    ? persianDate.add('y', i === 3 ? 9 : numbers).format('YYYY')
    : ''
}

const DecadeRow = ({row, persianDate, onSelectYear}) => (
  <tr className="decade-years">
    {[...Array(3)].map((_, j) => (
      <td
        className={isActive(row, j) ? '' : 'disabled'}
        key={j}
        data-year={isActive(row, j) ? year(row, j, persianDate) : ''}
        onClick={isActive(row, j) ? onSelectYear : () => {}}
      >
        {yearString(row, j, persianDate)}
      </td>
    ))}
  </tr>
)

DecadeRow.propTypes = {
  row: PropTypes.number,
  persianDate: PropTypes.instanceOf(PersianDate),
  onSelectYear: PropTypes.func,
}

export default DecadeRow
