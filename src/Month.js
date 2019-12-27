import React from 'react'

import MonthRow from './MonthRow'
import TodayInfo from './TodayInfo'

import translations from './translations'
import ChevronRight from 'mdi-react/ChevronRightIcon'
import ChevronLeft from 'mdi-react/ChevronLeftIcon'

const computeRows = persianDate => {
  const days = persianDate.daysInMonth()
  const header = 8 - persianDate.day()
  const footer = (days - header) % 7
  const body = days - header - footer
  return body / 7 + (header === 0 ? 0 : 1) + (footer === 0 ? 0 : 1)
}

export default ({
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
  hasTodayLink
}) => {
  const messages = translations[locale]
  const chevronIcon = dir => {
    const props = {
      onClick: dir === 'back' ? goPrev : goNext,
      size: 45
    }
    const isRight =
      (locale === 'fa' && dir === 'back') || (locale === 'en' && dir === 'next')
    const isLeft =
      (locale === 'en' && dir === 'back') || (locale === 'fa' && dir === 'next')
    if (isRight) {
      return (
        <span className="chevron">
          <ChevronRight {...props} />
        </span>
      )
    } else if (isLeft) {
      return (
        <span className="chevron">
          <ChevronLeft {...props} />
        </span>
      )
    }
  }
  const showTodayLink = !now.isSameMonth(persianDate) && hasTodayLink
  return (
    <div className="picker">
      <div className={hasHeader ? 'header rich-header' : 'header'}>
        {hasHeader ? <TodayInfo date={selected} /> : null}
        {chevronIcon('back')}
        <span onClick={onSelectYear}>{persianDate.format('MMMM YYYY')}</span>
        {showTodayLink ? (
          <span className="today-chevron">
            <span className="go-to-today" onClick={goToToday}>
              {messages.today}
            </span>
            {chevronIcon('next')}
          </span>
        ) : (
          chevronIcon('next')
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
