// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    let showFirstNameElement
    if (firstName === true) {
      showFirstNameElement = (
        <div className="name_container">
          <p className="name">Bhargav</p>
        </div>
      )
    }
    let showLastNameElement
    if (lastName === true) {
      showLastNameElement = (
        <div className="name_container">
          <p className="name">Vathsavai</p>
        </div>
      )
    }
    return (
      <>
        <div className="bg_container">
          <h1 className="main_heading">Show/Hide</h1>
          <div className="button_container">
            <div className="first_name_bg_container">
              <button
                className="button"
                type="button"
                onClick={this.showFirstName}
              >
                Show/Hide Firstname
              </button>
              {showFirstNameElement}
            </div>
            <div className="last_name_bg_container">
              <button
                className="button"
                type="button"
                onClick={this.showLastName}
              >
                Show/Hide Lastname
              </button>
              {showLastNameElement}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ShowHide
