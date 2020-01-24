import React from 'react'
import PersianDate from 'persian-date'

import CenturyRow from './CenturyRow'

import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'

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

const Century = ({ locale, year, onSelectDecade, goPrev, goNext }) => (
  <div className="picker">
    <div className="header">
      <span className="chevron" onClick={goPrev}>
        {locale === 'fa' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </span>
      <span>{getCenturyString(year)}</span>
      <span className="chevron" onClick={goNext}>
        {locale === 'fa' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </span>
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

export default Century
