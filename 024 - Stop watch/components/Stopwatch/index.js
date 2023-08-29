// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {totalSeconds: 0, isTimeRunning: false}
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onClickStart = () => {
    this.setState({isTimeRunning: true})
    this.timerId = setInterval(this.tick, 1000)
  }

  onClickStopButton = () => {
    this.setState({isTimeRunning: false})
    clearInterval(this.timerId)
  }

  onClickResetButton = () => {
    clearInterval(this.timerId)
    this.setState({totalSeconds: 0, isTimeRunning: false})
  }

  tick = () => {
    this.setState(prevState => ({totalSeconds: prevState.totalSeconds + 1}))
  }

  render() {
    const {totalSeconds, isTimeRunning} = this.state
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    console.log('min', minutes, 'sec', seconds)
    return (
      <div className="stop_watch_bg_container">
        <div className="stopwatch_timer_container">
          <h1 className="stopwatch_main_heading">Stopwatch</h1>
          <div className="timer_card_container">
            <div className="timer_img_heading_containe">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer_img"
              />
              <h1 className="timer_heading">Timer</h1>
            </div>
            <h1 className="timer_element">
              {minutes > 9 ? `${minutes}` : `0${minutes}`}:
              {seconds > 9 ? `${seconds}` : `0${seconds}`}
            </h1>
            <div className="timer_control_buttons_container">
              <button
                type="button"
                className="timer_control_button start"
                onClick={this.onClickStart}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="timer_control_button stop"
                onClick={this.onClickStopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="timer_control_button reset"
                onClick={this.onClickResetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
