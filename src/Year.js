import React from 'react'
import PropTypes from 'prop-types'
import PersianDate from 'persian-date'

import Chevron from './Chevron'

const Year = ({
  locale,
  persianDate,
  onSelectMonth,
  goPrev,
  goNext,
  onSelectDecade,
}) => (
  <div className="picker">
    <div className="header">
      <Chevron dir="back" locale={locale} goBack={goPrev} />
      <span onClick={onSelectDecade}>{persianDate.format('YYYY')}</span>
      <Chevron dir="forward" locale={locale} goForward={goNext} />
    </div>
    <div className="body">
      <table>
        <tbody>
          {[...Array(4)].map((_, i) => (
            <tr key={i} className="year-months">
              {[...Array(3)].map((__, j) => (
                <td key={j} data-month={i * 3 + j + 1} onClick={onSelectMonth}>
                  {persianDate
                    .startOf('year')
                    .add('M', i * 3 + j)
                    .format('MMMM')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

Year.propTypes = {
  persianDate: PropTypes.instanceOf(PersianDate),
  locale: PropTypes.oneOf(['en', 'fa']),
  goPrev: PropTypes.func,
  goNext: PropTypes.func,
  onSelectMonth: PropTypes.func,
  onSelectDecade: PropTypes.func,
}

export default Year
