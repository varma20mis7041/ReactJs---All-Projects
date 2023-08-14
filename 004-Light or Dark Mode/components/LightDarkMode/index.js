// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'dark'}

  toDarkMode = () => {
    this.setState({mode: 'dark'})
  }

  toLightMode = () => {
    this.setState({mode: 'light'})
  }

  render() {
    const {mode} = this.state
    if (mode === 'light') {
      return (
        <div className="bg_container">
          <div className="mode_change_container light_mode_container">
            <h1 className="main_heading light_mode_heading">
              Click To Change The Mode
            </h1>
            <button
              className="mode_change_button"
              type="button"
              onClick={this.toDarkMode}
            >
              Dark Mode
            </button>
          </div>
        </div>
      )
    }
    return (
      <>
        <div className="bg_container">
          <div className="mode_change_container dark_mode_container">
            <h1 className="main_heading dark_mode_heading">
              Click To Change The Mode
            </h1>
            <button
              className="mode_change_button"
              type="button"
              onClick={this.toLightMode}
            >
              Light Mode
            </button>
          </div>
        </div>

        <div className="last-container">
          <p>
            Developed by @Bhargav varma | Developed date : 1 Aug 2023 | contact
            : bhargav.coding@gmail.com{' '}
          </p>
        </div>
      </>
    )
  }
}

export default LightDarkMode
