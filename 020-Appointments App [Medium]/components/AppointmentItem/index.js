// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, onClickFavouriteButton} = props
  const {id, title, appointmentDate, isFavourite} = appointmentDetails
  function formatDate(inputDate) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]

    const date = new Date(inputDate)
    const dayOfMonth = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const dayOfWeek = daysOfWeek[date.getDay()]

    return `Date: ${dayOfMonth} ${month} ${year}, ${dayOfWeek}`
  }

  const inputDate = appointmentDate
  const formattedDate = formatDate(inputDate)

  const starUnFilledImgUrl =
    'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const starFilledImgUrl =
    'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  const favImg = isFavourite ? starFilledImgUrl : starUnFilledImgUrl

  console.log(favImg)
  const favButtonClicked = () => {
    onClickFavouriteButton(id)
  }

  return (
    <li className="appointment_card_container">
      <div className="appointment_card_title_and_date_container">
        <p className="title_heading_element">{title}</p>
        <p className="date">{formattedDate}</p>
      </div>
      <div className="fav_container">
        <button
          type="button"
          className="fav_button"
          onClick={favButtonClicked}
          data-testid="star"
        >
          <img src={favImg} alt="star" className="fav_img" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
