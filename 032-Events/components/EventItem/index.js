// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventClicked = () => {
    onClickEvent(id)
  }
  return (
    <li>
      <button type="button" className="event_item_card_container">
        <img
          src={imageUrl}
          alt="event"
          className={`event_img_element ${isActive ? 'img_border' : null}`}
          onClick={eventClicked}
        />
        <h1 className="event_heading_element">{name}</h1>
        <p className="event_location_element">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
