// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  bananaCount = () => {
    this.setState(previousState => ({banana: previousState.banana + 1}))
  }

  mangoCount = () => {
    this.setState(previousState => ({mango: previousState.mango + 1}))
  }

  render() {
    const {banana, mango} = this.state
    return (
      <div className="bg_container">
        <div className="fruit_bg_container">
          <h1 className="main_heading">
            Bob ate <span className="count_value">{mango}</span> mangoes
            <span className="count_value"> {banana}</span> bananas
          </h1>
          <div className="fruit_container">
            <div className="fruit">
              <img
                className="img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <div className="button_container">
                <button
                  className="button"
                  onClick={this.mangoCount}
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit">
              <img
                className="img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <div className="button_container">
                <button
                  className="button"
                  onClick={this.bananaCount}
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
