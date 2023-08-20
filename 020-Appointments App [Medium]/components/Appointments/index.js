// Write your code here
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'
import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {
    title: '',
    appointmentDate: '',
    appointmentsList: [],
    starredListRequest: false,
  }

  updateTitleInput = event => {
    this.setState({title: event.target.value})
  }

  updateDateInput = event => {
    this.setState({appointmentDate: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, appointmentDate} = this.state
    console.log('appointmentDate', appointmentDate)
    console.log('title', title)

    if (title !== '' && appointmentDate !== '') {
      const newAppointment = {
        id: uuidv4(),
        title,
        appointmentDate,
        isFavourite: false,
      }
      console.log(newAppointment)
      this.setState(prevState => ({
        appointmentsList: prevState.appointmentsList.concat(newAppointment),
        title: '',
        appointmentDate: '',
      }))
    }
  }

  onClickFavouriteButton = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isFavourite: !eachAppointment.isFavourite}
        }
        return eachAppointment
      }),
    }))
  }

  onClickStarredButton = () => {
    this.setState(prevState => ({
      starredListRequest: !prevState.starredListRequest,
    }))
  }

  render() {
    const {title, appointmentDate, appointmentsList} = this.state
    const {starredListRequest} = this.state
    const filterAppointmentsText = starredListRequest ? 'All' : 'Starred'
    const starredListItems = appointmentsList.filter(
      eachAppointment => eachAppointment.isFavourite === true,
    )
    const appointmentListToDisplay = starredListRequest
      ? starredListItems
      : appointmentsList

    return (
      <div className="app_bg_container">
        <div className="appointment_app_card_container">
          <div className="appointment_top_section_container">
            <form
              className="form_element_container"
              onSubmit={this.addAppointment}
            >
              <h1 className="appointment_app_main_heading">Add Appointment</h1>
              <div className="title_container">
                <label htmlFor="title_name" className="title_label_element">
                  TITLE
                </label>
                <input
                  id="title_name"
                  type="text"
                  placeholder="Title"
                  className="title_input_element"
                  onChange={this.updateTitleInput}
                  value={title}
                />
              </div>
              <div className="date_input_container">
                <label htmlFor="date" className="date_label_element">
                  DATE
                </label>
                <input
                  id="date"
                  type="date"
                  className="date_input_element"
                  onChange={this.updateDateInput}
                  value={appointmentDate}
                />
              </div>
              <button type="submit" className="add_appointment_button">
                Add
              </button>
            </form>
            <div className="img_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="appointment_img"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="hr_line" />
          <div className="appointment_display_card">
            <div className="appointment_display_top_section">
              <h1 className="appointments_display_main_heading">
                Appointments
              </h1>
              <button
                type="button"
                className="starred_button"
                onClick={this.onClickStarredButton}
              >
                {filterAppointmentsText}
              </button>
            </div>
            <ul className="ul_list_container">
              {appointmentListToDisplay.map(eachAppointment => (
                <AppointmentItem
                  appointmentDetails={eachAppointment}
                  key={eachAppointment.id}
                  onClickFavouriteButton={this.onClickFavouriteButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
