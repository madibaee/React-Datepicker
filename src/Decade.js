import React from 'react'
import PersianDate from 'persian-date'

import DecadeRow from './DecadeRow'

import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'

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
  onSelectCentury
}) => (
  <div className="picker">
    <div className="header">
      <span className="chevron" onClick={goPrev}>
        {locale === 'fa' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </span>
      <span onClick={onSelectCentury}>{getCenturyString(year)}</span>
      <span className="chevron" onClick={goNext}>
        {locale === 'fa' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </span>
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

export default Decade
