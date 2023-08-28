// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTimerRunning: false,
      minutes: 25,
      seconds: 0,
      timerLimit: 25,
    }
  }

  stopOrPauseTimer = () => {
    const {isTimerRunning} = this.state
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
    if (isTimerRunning) {
      clearInterval(this.timerId)
    } else {
      this.timerId = setInterval(this.tick, 1000)
    }
  }

  onClickResetButton = () => {
    this.setState({isTimerRunning: false})
    this.setState({minutes: 25})
    this.setState({seconds: 0})
    this.setState({timerLimit: 25})
    clearInterval(this.timerId)
    this.timerId = undefined
  }

  tick = () => {
    const {minutes, seconds} = this.state
    if (minutes === 0 && seconds === 1) {
      clearInterval(this.timerId)
      this.setState({isTimerRunning: false})
    }

    if (seconds === 0) {
      this.setState({seconds: 59})
      this.setState(prevState => ({minutes: prevState.minutes - 1}))
    } else {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    }
  }

  onClickIncreaseTimer = () => {
    if (this.timerId === undefined) {
      this.setState(prevState => ({minutes: prevState.minutes + 1}))
      this.setState(prevState => ({timerLimit: prevState.timerLimit + 1}))
    }
  }

  onClickDecreaseTimer = () => {
    if (this.timerId === undefined) {
      this.setState(prevState => ({minutes: prevState.minutes - 1}))
      this.setState(prevState => ({timerLimit: prevState.timerLimit - 1}))
    }
  }

  render() {
    const {minutes, seconds, timerLimit} = this.state
    const newSeconds = seconds < 10 ? `0${seconds}` : seconds
    console.log('Bhargav')
    const {isTimerRunning} = this.state
    const stopOrPauseUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    return (
      <div className="digital_timer_bg_container">
        <h1 className="digital_timer_heading">Digital Timer</h1>
        <div className="digital_timer_container">
          <div className="time_container_card">
            <div className="timer_container">
              <h1 className="timer_container_time_element">
                {minutes}:{newSeconds}
              </h1>
              <p className="timer_container_play_pause_element">
                {isTimerRunning ? 'Running' : 'Paused'}
              </p>
            </div>
          </div>
          <div className="timer_result_container">
            <div className="start_and_restart_container">
              <div className="start_container">
                <button
                  className="start_stop_button"
                  type="button"
                  onClick={this.stopOrPauseTimer}
                >
                  <img
                    src={stopOrPauseUrl}
                    alt={isTimerRunning ? 'pause icon' : 'play icon'}
                    className="start_stop_img_element"
                  />

                  {isTimerRunning ? 'Pause' : 'Start'}
                </button>
              </div>
              <div className="reset_container">
                <button
                  className="reset_button reset_heading_element"
                  type="button"
                  onClick={this.onClickResetButton}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="reset_img_element"
                  />
                  Reset
                </button>
              </div>
            </div>
            <p className="set_timer_limit_element">Set Timer Limit</p>
            <div className="set_timer_container">
              <button
                type="button"
                className="set_timer_button"
                onClick={this.onClickDecreaseTimer}
              >
                -
              </button>
              <p className="set_timer_element">{timerLimit}</p>
              <button
                type="button"
                className="set_timer_button"
                onClick={this.onClickIncreaseTimer}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
