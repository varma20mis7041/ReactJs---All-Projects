// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increaseCount = () => {
    const increment = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + increment}))
  }

  render() {
    const {count} = this.state
    let text
    if (count % 2 === 0) {
      text = 'Even'
    } else {
      text = 'Odd'
    }
    return (
      <div className="bg_container">
        <div className="counter_bg_counter">
          <h1 className="count_value">Count {count}</h1>
          <p className="count_status">Count is {text}</p>
          <div>
            <button
              type="button"
              className="increment_button"
              onClick={this.increaseCount}
            >
              Increment
            </button>
          </div>
          <p className="instruction_text">
            *Increase by Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
