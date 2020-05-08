import React from 'react'
import PropTypes from 'prop-types'
import PersianDate from 'persian-date'

import DecadeRow from './DecadeRow'

import Chevron from './Chevron'

const decade = year => {
  const firstYear = Math.floor(year / 10) * 10
  return new PersianDate([firstYear])
}

const getCenturyString = year => {
  const date = decade(year)
  const start = date.format('YYYY')
  const end = date.add('y', 9).format('YYYY')
  return `${end} - ${start}`
}

const Decade = ({
  locale,
  year,
  onSelectYear,
  goPrev,
  goNext,
  onSelectCentury,
}) => (
  <div className="picker">
    <div className="header">
      <Chevron dir="back" locale={locale} goBack={goPrev} />
      <span onClick={onSelectCentury}>{getCenturyString(year)}</span>
      <Chevron dir="forward" locale={locale} goForward={goNext} />
    </div>
    <div className="body">
      <table>
        <tbody>
          {[...Array(4)].map((_, i) => (
            <DecadeRow
              key={i}
              row={i}
              persianDate={decade(year)}
              onSelectYear={onSelectYear}
            />
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

Decade.propTypes = {
  locale: PropTypes.oneOf(['en', 'fa']),
  year: PropTypes.number,
  onSelectYear: PropTypes.func,
  goPrev: PropTypes.func,
  goNext: PropTypes.func,
  onSelectCentury: PropTypes.func,
}

export default Decade
