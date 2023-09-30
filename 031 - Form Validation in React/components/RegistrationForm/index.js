// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    successPage: false,
    firstName: '',
    lastName: '',
    firstNameErrMsg: false,
    lastNameErrMsg: false,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({firstNameErrMsg: true, lastNameErrMsg: true})
    } else if (firstName === '') {
      this.setState({firstNameErrMsg: true, lastNameErrMsg: false})
    } else if (lastName === '') {
      this.setState({firstNameErrMsg: false, lastNameErrMsg: true})
    } else {
      this.setState({successPage: true})
    }
  }

  firstNameOnBlurEvent = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameErrMsg: true})
    } else {
      this.setState({firstNameErrMsg: false})
    }
  }

  lastNameOnBlurEvent = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameErrMsg: true})
    } else {
      this.setState({lastNameErrMsg: false})
    }
  }

  updateFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  updateLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({successPage: false, firstName: '', lastName: ''})
  }

  registerForm = () => {
    const {firstNameErrMsg, lastNameErrMsg} = this.state
    return (
      <form
        className="registration_form_card_container"
        onSubmit={this.submitForm}
      >
        <div className="label_container">
          <label className="label_element" htmlFor="firstname">
            FIRST NAME
          </label>
          <input
            type="text"
            placeholder="First name"
            id="firstname"
            className={`input_element ${firstNameErrMsg ? 'err_border' : null}`}
            onBlur={this.firstNameOnBlurEvent}
            onChange={this.updateFirstName}
          />
          {firstNameErrMsg ? <p className="err_msg_element">Required</p> : null}
        </div>
        <div className="label_container">
          <label className="label_element" htmlFor="lastname">
            LAST NAME
          </label>
          <input
            type="text"
            placeholder="Last name"
            id="lastname"
            className={`input_element ${lastNameErrMsg ? 'err_border' : null}`}
            onChange={this.updateLastName}
            onBlur={this.lastNameOnBlurEvent}
          />
          {lastNameErrMsg ? <p className="err_msg_element">Required</p> : null}
        </div>

        <div className="submit_button_container">
          <button className="submit_button" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  successPage = () => (
    <div className="success_card_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success_img_element"
      />
      <p className="success_text">Submitted Successfully</p>
      <div>
        <button
          type="button"
          className="submit_another_response_button"
          onClick={this.onClickSubmitAnotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {successPage} = this.state
    return (
      <div className="registration_form_bg_container">
        <h1 className="registration_form_main_heading">Registration</h1>
        {successPage ? this.successPage() : this.registerForm()}
      </div>
    )
  }
}
export default RegistrationForm
