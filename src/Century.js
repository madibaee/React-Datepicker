import React from 'react'
import PersianDate from 'persian-date'

import CenturyRow from './CenturyRow'

import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

const century = year => {
  const firstYear = Math.floor(year / 100) * 100
  return new PersianDate([firstYear])
}

export default ({
  locale,
  year,
  onSelectDecade,
  goPrev,
  goNext
}) => (
  <div className="picker">
    <div className="header">
      <span className="chevron">
        <Icon path={(locale === 'fa')? mdiChevronRight :mdiChevronLeft} onClick={goPrev} />
      </span>
      <span>{
        century(year).add('y', 99).format('YYYY')
        + ' - ' +
        century(year).format('YYYY')
      }</span>
      <span className="chevron">
        <Icon path={(locale === 'fa')? mdiChevronLeft: mdiChevronRight} onClick={goNext} />
      </span>
    </div>
    <div className="body">
      <table>
        <tbody>
          {[...Array(4)].map((_, i) =>
            <CenturyRow
            key={i}
            row={i}
            persianDate={century(year)}
            onSelectDecade={onSelectDecade} />
          )}
        </tbody>
      </table>
    </div>
  </div>
)
