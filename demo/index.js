import React from 'react'
import {render} from 'react-dom'
import Datepicker from '../src'

window.React = React

class PersianDatepicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: 'en',
      type: 'gregorian',
      format: 'MMM D, YYYY',
    }

    this.changeCalendar = this.changeCalendar.bind(this)
    this.changeLocale = this.changeLocale.bind(this)
    this.changeFormat = this.changeFormat.bind(this)
  }

  changeCalendar(event) {
    this.setState({
      type: event.target.value,
    })
  }

  changeLocale(event) {
    this.setState({
      locale: event.target.value,
    })
  }

  changeFormat(event) {
    this.setState({
      format: event.target.value,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="options">
          <div className="option">
            <h4>Calendar Type</h4>

            <div className="type">
              <div className="pretty p-default p-round">
                <input
                  type="radio"
                  name="type"
                  value="gregorian"
                  onChange={this.changeCalendar}
                  checked={this.state.type === 'gregorian'}
                />
                <div className="state p-primary">
                  <label>Gregorian</label>
                </div>
              </div>

              <div className="pretty p-default p-round">
                <input
                  type="radio"
                  name="type"
                  value="persian"
                  onChange={this.changeCalendar}
                  checked={this.state.type === 'persian'}
                />
                <div className="state p-primary">
                  <label>Jalali</label>
                </div>
              </div>
            </div>
          </div>

          <div className="option">
            <h4>Locale</h4>

            <div className="type">
              <div className="pretty p-default p-round">
                <input
                  type="radio"
                  name="locale"
                  value="en"
                  onChange={this.changeLocale}
                  checked={this.state.locale === 'en'}
                />
                <div className="state p-primary">
                  <label>english</label>
                </div>
              </div>

              <div className="pretty p-default p-round">
                <input
                  type="radio"
                  name="locale"
                  value="fa"
                  onChange={this.changeLocale}
                  checked={this.state.locale === 'fa'}
                />
                <div className="state p-primary">
                  <label>farsi</label>
                </div>
              </div>
            </div>
          </div>

          <div className="option">
            <h4>Format</h4>

            <div className="type">
              <div className="pretty p-default p-round">
                <input
                  type="radio"
                  name="format"
                  value="MMM D, YYYY"
                  onChange={this.changeFormat}
                  checked={this.state.format === 'MMM D, YYYY'}
                />
                <div className="state p-primary">
                  <label>Jun 21, 2019</label>
                </div>
              </div>

              <div className="pretty p-default p-round">
                <input
                  type="radio"
                  name="format"
                  value="D MMMM YYYY"
                  onChange={this.changeFormat}
                  checked={this.state.format === 'D MMMM YYYY'}
                />
                <div className="state p-primary">
                  <label>21 June 2019</label>
                </div>
              </div>

              <div className="pretty p-default p-round">
                <input
                  type="radio"
                  name="format"
                  value="l"
                  onChange={this.changeFormat}
                  checked={this.state.format === 'l'}
                />
                <div className="state p-primary">
                  <label>2019/6/21</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="datepicker">
          <h4>Light Theme</h4>
          <Datepicker {...this.state} hasTodayLink={true} />
        </div>
        <div className="datepicker dark">
          <h4>Dark Theme</h4>
          <Datepicker {...this.state} hiddenInput={true} />
        </div>
        <div className="datepicker">
          <h4>With Header</h4>
          <Datepicker {...this.state} hasHeader={true} />
        </div>
      </div>
    )
  }
}

render(<PersianDatepicker />, document.getElementById('container'))
