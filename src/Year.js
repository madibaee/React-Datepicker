import React from 'react'

import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'

const Year = ({
  locale,
  persianDate,
  onSelectMonth,
  goPrev,
  goNext,
  onSelectDecade
}) => (
  <div className="picker">
    <div className="header">
      <span className="chevron" onClick={goPrev}>
        {locale === 'fa' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </span>
      <span onClick={onSelectDecade}>{persianDate.format('YYYY')}</span>
      <span className="chevron" onClick={goNext}>
        {locale === 'fa' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </span>
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

export default Year
