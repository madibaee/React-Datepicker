import React from 'react'
import PropTypes from 'prop-types'
import PersianDate from 'persian-date'

import Chevron from './Chevron'
import CenturyRow from './CenturyRow'

const century = year => {
  const firstYear = Math.floor(year / 100) * 100
  return new PersianDate([firstYear])
}

const getCenturyString = year => {
  const date = century(year)
  const start = date.format('YYYY')
  const end = date.add('y', 99).format('YYYY')
  return `${end} - ${start}`
}

const Century = ({locale, year, onSelectDecade, goPrev, goNext}) => (
  <div className="picker">
    <div className="header">
      <Chevron dir="back" locale={locale} goBack={goPrev} />
      <span>{getCenturyString(year)}</span>
      <Chevron dir="forward" locale={locale} goForward={goNext} />
    </div>
    <div className="body">
      <table>
        <tbody>
          {[...Array(4)].map((_, i) => (
            <CenturyRow
              key={i}
              row={i}
              persianDate={century(year)}
              onSelectDecade={onSelectDecade}
            />
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

Century.propTypes = {
  locale: PropTypes.oneOf(['en', 'fa']),
  year: PropTypes.number,
  onSelectDecade: PropTypes.func,
  goPrev: PropTypes.func,
  goNext: PropTypes.func,
}

export default Century
