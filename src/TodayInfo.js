import React from 'react'
import PropTypes from 'prop-types'
import PersianDate from 'persian-date'

const TodayInfo = ({date}) => (
  <div className="today-info">
    <div className="info">
      <div className="day">{date.format('dddd')}</div>
      <div className="date">
        <div className="h1">{date.format('D')}</div>
      </div>
      <div className="month">{date.format('MMMM')}</div>
      <div className="year">{date.format('YYYY')}</div>
    </div>
  </div>
)

TodayInfo.propTypes = {
  date: PropTypes.instanceOf(PersianDate),
}

export default TodayInfo
