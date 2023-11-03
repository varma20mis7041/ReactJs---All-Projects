// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {itemDetails} = props
  const {courseTitle, description, duration, tagsList} = itemDetails

  return (
    <div className="course_timeline_card_container">
      <div className="course_timeline_top_section">
        <h1 className="course_card_title">{courseTitle}</h1>
        <div className="clock_icon_duration_container">
          <AiFillClockCircle />
          <p className="duration_element">{duration}</p>
        </div>
      </div>
      <p className="course_card_description">{description}</p>
      <div className="tag_items_container">
        {tagsList.map(eachItem => (
          <p className="tag_item">{eachItem.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
