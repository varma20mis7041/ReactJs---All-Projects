// Write your code here
import './index.css'

const statusConstants = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  notRegistered: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {status} = props
  const renderInitialScreen = () => (
    <div className="status_response_container">
      <h1 className="initial_status_element">
        Click on an event, to view its registration details
      </h1>
    </div>
  )
  const renderRegisteredScreen = () => (
    <div className="status_response_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered_img_element"
      />
      <h1 className="registered_text_element">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisteredScreen = () => (
    <div className="status_response_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet_to_register_img_element"
      />
      <p className="yet_to_register_description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="register_here_button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderClosedScreen = () => (
    <div className="status_response_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed_img_element"
      />
      <h1 className="registrations_are_closed_heading_element">
        Registrations Are Closed Now!
      </h1>
      <p className="closed_card_description">
        Stay tuned. We will reopen the registration soon!
      </p>
    </div>
  )

  switch (status) {
    case statusConstants.initial:
      return renderInitialScreen()
    case statusConstants.registered:
      return renderRegisteredScreen()
    case statusConstants.notRegistered:
      return renderYetToRegisteredScreen()
    case statusConstants.closed:
      return renderClosedScreen()

    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
