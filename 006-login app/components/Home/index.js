// Write your code here

import {Component} from 'react'

import Welcome from '../Message/index'

import Login from '../Login/index'

import Logout from '../Logout/index'

import './index.css'

class Home extends Component {
  state = {login: false}

  changeButton = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state
    console.log(login)
    let logInLogoutMessage
    if (login === false) {
      logInLogoutMessage = <Login login={this.changeButton} />
    } else {
      logInLogoutMessage = <Logout logout={this.changeButton} />
    }

    return (
      <div className="bg_container">
        <div className="login_logout_page_card_container">
          <Welcome login={login} />
          {logInLogoutMessage}
        </div>
      </div>
    )
  }
}

export default Home
