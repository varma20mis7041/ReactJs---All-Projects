import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errorMsgText: '',
    showErrMsg: false,
  }

  onChangeUpdateUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangeUpdatePassword = event => {
    this.setState({password: event.target.value})
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  loginFailed = errMsg => {
    this.setState({errorMsgText: errMsg, showErrMsg: true})
  }

  onSubmitUserVerification = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const result = await response.json()
    console.log('result of the login verification', result.error_msg)
    if (response.ok === true) {
      this.loginSuccess(result.jwt_token)
    } else {
      this.loginFailed(result.error_msg)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    const {username, password, errorMsgText, showErrMsg} = this.state
    console.log('error_text', errorMsgText)
    console.log('is error', showErrMsg)
    return (
      <div className="login_bg_container">
        <form
          className="login_card_container"
          onSubmit={this.onSubmitUserVerification}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website_logo_img_element"
          />
          <div className="input_container">
            <label className="input_heading" htmlFor="user_name">
              USERNAME
            </label>
            <input
              id="user_name"
              placeholder="Username"
              className="input_element"
              value={username}
              type="text"
              onChange={this.onChangeUpdateUserName}
            />
          </div>
          <div className="input_container">
            <label className="input_heading" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="input_element"
              id="password"
              placeholder="Password"
              value={password}
              type="password"
              onChange={this.onChangeUpdatePassword}
            />
          </div>
          <div className="button_and_error_msg_container">
            <button className="login_button" type="submit">
              Login
            </button>
            <p className="error_msg_display_element">
              {showErrMsg ? `*${errorMsgText}` : null}
            </p>
          </div>
        </form>
        <div className="note_container">
          <h1 className="note_heading">Note:</h1>
          <p>
            To practice authentication and authorization, i used login api from
            nxtwave company . So to test this application
          </p>
          <p>username : rahul</p>
          <p>password : rahul@2021</p>
          <p className="thank_you">Thank you</p>
        </div>
      </div>
    )
  }
}

export default LoginRoute
