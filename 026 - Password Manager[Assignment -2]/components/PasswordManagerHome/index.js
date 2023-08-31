import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

let bgClassNameIndex = 0

class PasswordManagerHome extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onClickAddPassword = event => {
    event.preventDefault()
    const {passwordInput, userNameInput, websiteInput} = this.state
    if (bgClassNameIndex === 7) {
      bgClassNameIndex = 0
    }

    const bgColor = initialContainerBackgroundClassNames[bgClassNameIndex]

    bgClassNameIndex += 1
    if (passwordInput !== '' && userNameInput !== '' && websiteInput !== '') {
      const newPassword = {
        id: uuidv4(),
        websiteName: websiteInput,
        userName: userNameInput,
        password: passwordInput,
        showPassword: false,
        bgColor,
      }
      this.setState(prevState => ({
        passwordsList: [...prevState.passwordsList, newPassword],
        websiteInput: '',
        userNameInput: '',
        passwordInput: '',
        searchInput: '',
      }))
    } else {
      alert('You should fill appropriate values in the form')
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  enteredPasswordContainer = (length, passwordsList) => {
    // console.log('length and password', length, passwordsList)
    if (length === 0) {
      return (
        <div className="no_passwords_display_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no_passwords_img_element"
          />
          <p className="no_passwords_heading">No Passwords</p>
        </div>
      )
    }

    return (
      <ul className="entered_passwords_bg_container">
        {passwordsList.map(eachPassword => (
          <PasswordItem
            passwordDetails={eachPassword}
            key={eachPassword.id}
            onClickDeleteButton={this.onClickDeleteButton}
          />
        ))}
      </ul>
    )
  }

  getPasswordsListWithSearchInput = passwordsList => {
    const {searchInput} = this.state
    const newList = passwordsList.filter(eachPasswordItem =>
      eachPasswordItem.websiteName
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    // console.log('newList', newList)
    // console.log('searchInput', searchInput)
    return newList
  }

  onClickDeleteButton = id => {
    const {passwordsList} = this.state
    const updatedListAfterDeletion = passwordsList.filter(
      eachPasswordItem => eachPasswordItem.id !== id,
    )
    this.setState({passwordsList: updatedListAfterDeletion})
  }

  showOrHidePasswords = () => {
    const {passwordsList} = this.state
    console.log('show passwords Clicked')
    const updatedPasswordsList = passwordsList.map(eachPassword => ({
      ...eachPassword,
      showPassword: !eachPassword.showPassword,
    }))
    this.setState({passwordsList: updatedPasswordsList})
    // console.log('updated show password List', updatedPasswordsList)
  }

  render() {
    const {userNameInput, passwordInput, websiteInput} = this.state
    const {passwordsList} = this.state
    const displayedPasswordList = this.getPasswordsListWithSearchInput(
      passwordsList,
    )

    return (
      <div className="password_manager_bg_container">
        <div className="logo_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo_img_element"
          />
        </div>
        <div className="password_details_entry_container">
          <div className="password_manager_img_container sm_devices_img_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              className="password_manager_img_element"
              alt="password manager"
            />
          </div>
          <div className="add_password_details_container">
            <h1 className="add_password_heading_element">Add New Password</h1>
            <form
              className="input_container"
              onSubmit={this.onClickAddPassword}
            >
              <div className="img_container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input_left_img_element"
                />
              </div>

              <input
                className="input_element"
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsiteInput}
                value={websiteInput}
              />
            </form>
            <div className="input_container">
              <div className="img_container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input_left_img_element"
                />
              </div>

              <input
                className="input_element"
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUsernameInput}
                value={userNameInput}
              />
            </div>

            <div className="input_container">
              <div className="img_container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input_left_img_element"
                />
              </div>

              <input
                className="input_element"
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePasswordInput}
                value={passwordInput}
              />
            </div>
            <div className="button_container">
              <button
                className="add_button"
                type="submit"
                onClick={this.onClickAddPassword}
              >
                Add
              </button>
            </div>
          </div>
          <div className="password_manager_img_container lg_devices_img_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="password_manager_img_element"
              alt="password manager"
            />
          </div>
        </div>
        <div className="entered_passwords_container">
          <div className="password_count_and_search_bar_container">
            <div className="password_count_container">
              <h1 className="password_count_main_heading">Your Passwords</h1>
              <div className="count_container">
                <p className="count_element">{displayedPasswordList.length}</p>
              </div>
            </div>
            <div className="search_bar_container">
              <div className="search_img_container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search_img"
                  className="search_img_element"
                />
              </div>
              <input
                type="search"
                placeholder="Search"
                className="search_input_element"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr />
          <div className="show_password_container">
            <input
              type="checkbox"
              id="show_password_check_box"
              onClick={this.showOrHidePasswords}
            />
            <label
              htmlFor="show_password_check_box"
              className="show_password_label_element"
            >
              Show Passwords
            </label>
          </div>
          {this.enteredPasswordContainer(
            displayedPasswordList.length,
            displayedPasswordList,
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManagerHome
