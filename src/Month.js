import React from 'react'
import PropTypes from 'prop-types'
import PersianDate from 'persian-date'

import MonthRow from './MonthRow'
import TodayInfo from './TodayInfo'

import translations from './translations'
import Chevron from './Chevron'

const computeRows = persianDate => {
  const days = persianDate.daysInMonth()
  const header = 8 - persianDate.day()
  const footer = (days - header) % 7
  const body = days - header - footer
  return body / 7 + (header === 0 ? 0 : 1) + (footer === 0 ? 0 : 1)
}

const Month = ({
  now,
  locale,
  goPrev,
  goNext,
  selected,
  goToToday,
  hasHeader,
  persianDate,
  onSelectYear,
  onSelectDate,
  hasTodayLink,
}) => {
  const messages = translations[locale]
  const showTodayLink = !now.isSameMonth(persianDate) && hasTodayLink
  return (
    <div className="picker">
      <div className={hasHeader ? 'header rich-header' : 'header'}>
        {hasHeader ? <TodayInfo date={selected} /> : null}
        <Chevron dir="back" locale={locale} goBack={goPrev} />
        <span onClick={onSelectYear}>{persianDate.format('MMMM YYYY')}</span>
        {showTodayLink ? (
          <span className="today-chevron">
            <span className="go-to-today" onClick={goToToday}>
              {messages.today}
            </span>
            <Chevron dir="forward" locale={locale} goForward={goNext} />
          </span>
        ) : (
          <Chevron dir="forward" locale={locale} goForward={goNext} />
        )}
      </div>
      <div className="body">
        <table>
          <thead>
            <tr className="week-days">
              {persianDate.rangeName().weekdaysMin.map((name, i) => (
                <th key={i}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(computeRows(persianDate))].map((_, i) => (
              <MonthRow
                key={i}
                row={i}
                persianDate={persianDate}
                now={now}
                selected={selected}
                onSelectDate={onSelectDate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

Month.propTypes = {
  now: PropTypes.instanceOf(PersianDate),
  selected: PropTypes.instanceOf(PersianDate),
  persianDate: PropTypes.instanceOf(PersianDate),
  locale: PropTypes.oneOf(['en', 'fa']),
  goPrev: PropTypes.func,
  goNext: PropTypes.func,
  goToToday: PropTypes.func,
  hasHeader: PropTypes.bool,
  onSelectDate: PropTypes.func,
  onSelectYear: PropTypes.func,
  hasTodayLink: PropTypes.bool,
}

export default Month
