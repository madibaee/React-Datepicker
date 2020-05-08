import PropTypes from 'prop-types'
import PersianDate from 'persian-date'
import React, {useEffect, useState, useRef, useCallback} from 'react'

import {CalendarIcon} from './Icons'

import Month from './Month'
import Year from './Year'
import Decade from './Decade'
import Century from './Century'
import parseString from './parseString'

const Datepicker = ({
  type = 'gregorian',
  locale = 'en',
  format = 'l',
  onChange = x => x,
  onFocus = x => x,
  onBlur = x => x,
  onSetDate = x => x,
  onGoToToday = x => x,
  onSetMonth = x => x,
  onSetYear = x => x,
  onSetDecade = x => x,
  onShowYear = x => x,
  onShowDecade = x => x,
  onShowCentury = x => x,
  inputName = 'date',
  hasHeader = false,
  hasTodayLink = false,
  hasHiddenInput = false,
  hiddenInputLocale = 'en',
  hiddenInputType = 'gregorian',
  hiddenInputFormat = 'l',
}) => {
  const now = new PersianDate().toCalendar(type).toLocale(locale)

  const VIEW_MODES = {
    MONTH: 'month',
    YEAR: 'year',
    DECADE: 'decade',
    CENTURY: 'century',
  }

  const [isOpen, setIsOpen] = useState(false)
  const [dateState, setDateState] = useState({})
  const [viewMode, setViewMode] = useState(VIEW_MODES.MONTH)

  const inputRef = useRef(null)
  const datepickerRef = useRef(null)
  const canUpdateInputRef = useRef(true)
  const selectedDateRef = useRef(now)
  const dateInstaceRef = useRef(now.startOf('month'))

  const dir = locale === 'fa' ? 'rtl' : 'ltr'

  const openCalendar = () => setIsOpen(true)
  const closeCalendar = () => setIsOpen(false)
  const toggleCalendar = () => setIsOpen(!isOpen)

  const forceUpdate = useCallback(() => setDateState({}), [])

  useEffect(() => {
    setInputValue()
  }, [selectedDateRef.current, dateState])

  useEffect(() => {
    const handleClick = event => {
      const dom = event.target
      if (!datepickerRef.current.contains(dom) && document.contains(dom)) {
        closeCalendar()
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [datepickerRef.current])

  useEffect(() => {
    updateDateInctanse(dateInstaceRef.current.toCalendar(type).startOf('month'))
    selectedDateRef.current.toCalendar(type)
  }, [type])

  useEffect(() => {
    updateDateInctanse(dateInstaceRef.current.toLocale(locale))
    selectedDateRef.current.toLocale(locale)
  }, [locale])

  useEffect(() => {
    setInputValue()
  }, [format])

  const updateDateInctanse = persianDate => {
    forceUpdate()
    dateInstaceRef.current = persianDate
  }

  const setInputValue = () => {
    if (canUpdateInputRef.current) {
      inputRef.current.value = selectedDateRef.current.format(format)
    }
  }

  const parseDate = value => {
    const date = parseString(value, dateInstaceRef.current, format)
    if (date) {
      selectedDateRef.current = date
      updateDateInctanse(date.startOf('month'))
    }
  }

  const onChangeInput = event => {
    const value = event.target.value
    parseDate(value)
    onChange(value)
  }

  const onFocusInput = event => {
    canUpdateInputRef.current = false
    openCalendar()
    onFocus(event.target.value)
  }

  const onBlurInput = event => {
    canUpdateInputRef.current = true
    setInputValue()
    onBlur(event.target.value)
  }

  const setDate = event => {
    const day = event.target.getAttribute('data-day')
    const selectedDate = dateInstaceRef.current.startOf('month').add('d', day)
    selectedDateRef.current = selectedDate
    updateDateInctanse(selectedDate.startOf('month'))
    canUpdateInputRef.current = true
    setInputValue()
    closeCalendar()
    onSetDate(selectedDate.format(format))
  }

  const goToToday = () => {
    selectedDateRef.current = now
    updateDateInctanse(now.startOf('month'))
    onGoToToday(now.format(format))
  }

  const setMonth = event => {
    const month = event.target.getAttribute('data-month')
    const date = new PersianDate([dateInstaceRef.current.year(), month])
    updateDateInctanse(date)
    setViewMode(VIEW_MODES.MONTH)
    onSetMonth(event)
  }

  const setYear = event => {
    const year = event.target.getAttribute('data-year')
    const date = new PersianDate([year])
    updateDateInctanse(date)
    setViewMode(VIEW_MODES.YEAR)
    onSetYear(event)
  }

  const setDecade = event => {
    const year = event.target.getAttribute('data-decade')
    const date = new PersianDate([year])
    updateDateInctanse(date)
    setViewMode(VIEW_MODES.DECADE)
    onSetDecade(event)
  }

  const goToNextMonth = () => {
    updateDateInctanse(dateInstaceRef.current.startOf('month').add('M', 1))
  }

  const goToPrevMonth = () => {
    const date = dateInstaceRef.current.add('d', -2)
    updateDateInctanse(new PersianDate([date.year(), date.month()]))
  }

  const goToNextYear = () => {
    updateDateInctanse(dateInstaceRef.current.startOf('year').add('y', 1))
  }

  const goToPrevYear = () => {
    updateDateInctanse(dateInstaceRef.current.startOf('year').add('d', -1))
  }

  const goToNextDecade = () => {
    updateDateInctanse(dateInstaceRef.current.startOf('year').add('y', 10))
  }

  const goToPrevDecade = () => {
    updateDateInctanse(new PersianDate([dateInstaceRef.current.year() - 10]))
  }

  const goToNextCentury = () => {
    updateDateInctanse(dateInstaceRef.current.startOf('year').add('y', 100))
  }

  const goToPrevCentury = () => {
    updateDateInctanse(new PersianDate([dateInstaceRef.current.year() - 100]))
  }

  const showYear = () => {
    setViewMode(VIEW_MODES.YEAR)
    onShowYear()
  }

  const showDecade = () => {
    setViewMode(VIEW_MODES.DECADE)
    onShowDecade()
  }

  const showCentury = () => {
    setViewMode(VIEW_MODES.CENTURY)
    onShowCentury()
  }

  const inputAttributes = {
    className: 'date-input',
    type: 'text',
    name: inputName,
    spellCheck: false,
    onChange: onChangeInput,
    onFocus: onFocusInput,
    onBlur: onBlurInput,
    ref: inputRef,
  }

  const hiddenInputAttributes = {
    type: 'hidden',
    name: inputName,
    value: new PersianDate(selectedDateRef.current)
      .toLocale(hiddenInputLocale)
      .toCalendar(hiddenInputType)
      .format(hiddenInputFormat),
  }

  const commonAttributes = {
    now,
    locale,
    year: dateInstaceRef.current.year(),
    selected: selectedDateRef.current,
    persianDate: dateInstaceRef.current,
  }

  const monthAttributes = {
    onSelectDate: setDate,
    goNext: goToNextMonth,
    goPrev: goToPrevMonth,
    onSelectYear: showYear,
    goToToday: goToToday,
    hasHeader: hasHeader,
    hasTodayLink: hasTodayLink,
  }
  const yearAttributes = {
    onSelectMonth: setMonth,
    goNext: goToNextYear,
    goPrev: goToPrevYear,
    onSelectDecade: showDecade,
  }

  const decadeAttributes = {
    onSelectYear: setYear,
    goNext: goToNextDecade,
    goPrev: goToPrevDecade,
    onSelectCentury: showCentury,
  }

  const centuryAttributes = {
    onSelectDecade: setDecade,
    goNext: goToNextCentury,
    goPrev: goToPrevCentury,
  }

  return (
    <div
      className={`react-persian-datepicker react-persian-datepicker-${dir}`}
      ref={datepickerRef}
    >
      <div className="input">
        <CalendarIcon className="input-icon" onClick={toggleCalendar} />
        <input {...inputAttributes} />
        {hasHiddenInput && <input {...hiddenInputAttributes} />}
      </div>
      {isOpen ? (
        viewMode === VIEW_MODES.MONTH ? (
          <Month {...commonAttributes} {...monthAttributes} />
        ) : viewMode === VIEW_MODES.YEAR ? (
          <Year {...commonAttributes} {...yearAttributes} />
        ) : viewMode === VIEW_MODES.DECADE ? (
          <Decade {...commonAttributes} {...decadeAttributes} />
        ) : viewMode === VIEW_MODES.CENTURY ? (
          <Century {...commonAttributes} {...centuryAttributes} />
        ) : null
      ) : null}
    </div>
  )
}

Datepicker.propTypes = {
  type: PropTypes.oneOf(['gregorian', 'persian']),
  locale: PropTypes.oneOf(['en', 'fa']),
  format: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onSetDate: PropTypes.func,
  onGoToToday: PropTypes.func,
  onSetMonth: PropTypes.func,
  onSetYear: PropTypes.func,
  onSetDecade: PropTypes.func,
  onShowYear: PropTypes.func,
  onShowDecade: PropTypes.func,
  onShowCentury: PropTypes.func,
  inputName: PropTypes.string,
  hasHeader: PropTypes.bool,
  hasTodayLink: PropTypes.bool,
  hasHiddenInput: PropTypes.bool,
  hiddenInputLocale: PropTypes.oneOf(['en', 'fa']),
  hiddenInputType: PropTypes.oneOf(['gregorian', 'persian']),
  hiddenInputFormat: PropTypes.string,
}

export default Datepicker
