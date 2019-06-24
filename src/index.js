import { Component, createRef } from 'react'
import PersianDate from 'persian-date'

import Icon from '@mdi/react'
import { mdiCalendar } from '@mdi/js'

import Month from './Month'
import Year from './Year'
import Decade from './Decade'
import Century from './Century'
import parseString from './parseString'

class Container extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const now = new PersianDate()
    now.toCalendar(nextProps.calendar)
    now.toLocale(nextProps.locale)
    if (nextProps.locale !== prevState.locale ||
      nextProps.calendar !== prevState.calendar) {
      return ({
        locale: nextProps.locale,
        calendar: nextProps.calendar,
        now,
        persianDate: now.startOf('month'),
        selectedDate: now,
        ...nextProps
      })
    }
    if (nextProps.format !== prevState.format) {
      return ({
        format: nextProps.format || 'D MMMM YYYY',
        ...nextProps
      })
    }
    return nextProps
  }

  constructor(props) {
    super(props)
    const now = new PersianDate()
    now.toCalendar(props.calendar)
    now.toLocale(props.locale)
    const persianDate = now.startOf('month')
    const format = props.format || 'D MMMM YYYY'
    this.state = {
      locale: props.locale,
      calendar: props.calendar,
      now,
      persianDate,
      selectedDate: now,
      view: 'month',
      format,
      updateInputValue: true,
      isOpen: false,
      hasHeader: props.hasHeader || false
    }

    this.dateInput = createRef()

    this.openCalendar = this.openCalendar.bind(this)
    this.closeCalendar = this.closeCalendar.bind(this)
    this.toggleCalendar = this.toggleCalendar.bind(this)
    this.setDate = this.setDate.bind(this)
    this.setMonth = this.setMonth.bind(this)
    this.setYear = this.setYear.bind(this)
    this.setDecade = this.setDecade.bind(this)
    this.goToNextMonth = this.goToNextMonth.bind(this)
    this.goToPrevMonth = this.goToPrevMonth.bind(this)
    this.goToPrevYear = this.goToPrevYear.bind(this)
    this.goToNextYear = this.goToNextYear.bind(this)
    this.goToNextDecade = this.goToNextDecade.bind(this)
    this.goToPrevDecade = this.goToPrevDecade.bind(this)
    this.goToPrevCentury = this.goToPrevCentury.bind(this)
    this.goToNextCentury = this.goToNextCentury.bind(this)
    this.showYear = this.showYear.bind(this)
    this.showDecade = this.showDecade.bind(this)
    this.showCentury = this.showCentury.bind(this)
    this.goToToday = this.goToToday.bind(this)
    this.parseDate = this.parseDate.bind(this)
    this.onBlurInput = this.onBlurInput.bind(this)
    this.onFocusInput = this.onFocusInput.bind(this)
  }

  componentDidMount() {
    this.setInputValue()
  }

  componentDidUpdate() {
    this.setInputValue()
  }

  setInputValue() {
    if(this.state.updateInputValue) {
      this.dateInput.current.value = this.state.selectedDate.format(
        this.state.format
      )
    }
  }

  updateInputValue() {
    this.setState({
      updateInputValue: true
    })
  }

  openCalendar() {
    this.setState({
      isOpen: true
    })
  }

  closeCalendar() {
    this.setState({
      isOpen: false
    })
  }

  toggleCalendar() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  monthAttributes() {
    return {
      locale: this.state.locale,
      persianDate: this.state.persianDate,
      now: this.state.now,
      selected: this.state.selectedDate,
      onSelectDate: this.setDate,
      goNext: this.goToNextMonth,
      goPrev: this.goToPrevMonth,
      onSelectYear: this.showYear,
      goToToday: this.goToToday,
      hasHeader: this.state.hasHeader
    }
  }

  yearAttributes() {
    return {
      locale: this.state.locale,
      persianDate: this.state.persianDate,
      onSelectMonth: this.setMonth,
      goNext: this.goToNextYear,
      goPrev: this.goToPrevYear,
      onSelectDecade: this.showDecade
    }
  }

  decadeAttributes() {
    return {
      locale: this.state.locale,
      year: this.state.persianDate.year(),
      onSelectYear: this.setYear,
      goNext: this.goToNextDecade,
      goPrev: this.goToPrevDecade,
      onSelectCentury: this.showCentury
    }
  }

  centuryAttributes() {
    return {
      locale: this.state.locale,
      year: this.state.persianDate.year(),
      onSelectDecade: this.setDecade,
      goNext: this.goToNextCentury,
      goPrev: this.goToPrevCentury,
    }
  }

  goToToday() {
    this.setState({
      persianDate: this.state.now.startOf('month'),
      selectedDate: this.state.now,
    })
  }

  setDate(event) {
    const day = event.target.getAttribute('data-day')
    const selectedDate = this.state.persianDate.add('d', day)
    this.setState({
      persianDate: selectedDate.startOf('month'),
      selectedDate
    })
    this.updateInputValue()
    this.closeCalendar()
  }

  setMonth(event) {
    const month = event.target.getAttribute('data-month')
    const persianDate = new PersianDate([
      this.state.persianDate.year(),
      month
    ])
    this.setState({
      persianDate,
      view: 'month'
    })
  }

  setYear(event) {
    const year = event.target.getAttribute('data-year')
    const persianDate = new PersianDate([year])
    this.setState({
      persianDate,
      view: 'year'
    })
  }

  setDecade(event) {
    const year = event.target.getAttribute('data-decade')
    const persianDate = new PersianDate([year])
    this.setState({
      persianDate,
      view: 'decade'
    })
  }

  goToNextMonth() {
    const persianDate = this.state.persianDate.startOf('month').add('M', 1)
    this.setState({
      persianDate,
    })
  }

  goToPrevMonth() {
    var persianDate = this.state.persianDate
    persianDate = persianDate.add('d', -persianDate.date())
    this.setState({
      persianDate: new PersianDate([persianDate.year(), persianDate.month()])
    })
  }

  goToNextYear() {
    const persianDate = this.state.persianDate.startOf('year').add('y', 1)
    this.setState({
      persianDate,
    })
  }

  goToPrevYear() {
    var persianDate = this.state.persianDate
    persianDate = persianDate.startOf('year').add('d', -1)
    this.setState({
      persianDate
    })
  }

  goToNextDecade() {
    const persianDate = this.state.persianDate.startOf('year').add('y', 10)
    this.setState({
      persianDate,
    })
  }

  goToPrevDecade() {
    const persianDate = new PersianDate([
      this.state.persianDate.year() - 10
    ])
    this.setState({
      persianDate,
    })
  }

  goToNextCentury() {
    const persianDate = this.state.persianDate.startOf('year').add('y', 100)
    this.setState({
      persianDate,
    })
  }

  goToPrevCentury() {
    const persianDate = new PersianDate([
      this.state.persianDate.year() - 100
    ])
    this.setState({
      persianDate,
    })
  }

  showYear() {
    this.setState({
      view: 'year'
    })
  }

  showDecade() {
    this.setState({
      view: 'decade'
    })
  }

  showCentury() {
    this.setState({
      view: 'century'
    })
  }

  parseDate(event) {
    const date = parseString(event.target.value, this.state.persianDate, this.state.format)
    if (date) {
      this.setState({
        selectedDate: date,
        persianDate: date.startOf('month'),
        updateInputValue: false
      })
    }
  }

  onBlurInput() {
    this.updateInputValue()
  }

  onFocusInput() {
    this.setState({
      updateInputValue: false
    })
    this.openCalendar()
  }

  inputAttributes() {
    return {
      className: "date-input",
      type: "text",
      spellCheck: false,
      onChange: this.parseDate,
      onFocus: this.onFocusInput,
      onBlur: this.onBlurInput,
      ref: this.dateInput
    }
  }

  render() {
    return (
      <div className="react-persian-datepicker" dir={this.state.locale === 'fa'? "rtl": ""}>
        <div className="input">
          <Icon className="input-icon" path={mdiCalendar} onClick={this.toggleCalendar} />
          <input {...this.inputAttributes()} />
        </div>
        {
          this.state.isOpen?
          this.state.view === 'month'?
            <Month {...this.monthAttributes()} />:
          this.state.view === 'year'?
            <Year {...this.yearAttributes()} />:
          this.state.view === 'decade'?
            <Decade {...this.decadeAttributes()} />:
          this.state.view === 'century'?
            <Century {...this.centuryAttributes()} />: ''
        :
          ''
        }
    	</div>
    )
  }
}

export default Container
