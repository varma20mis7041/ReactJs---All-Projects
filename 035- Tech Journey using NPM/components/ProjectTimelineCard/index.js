// Write your code here
import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const TimelineView = props => {
  const {itemDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = itemDetails
  return (
    <div className="project_timeline_bg_container">
      <div className="img_container">
        <img src={imageUrl} alt="project" className="project_img_url" />
      </div>
      <div className="title_duration_container">
        <h1 className="project_title_heading_element">{projectTitle}</h1>
        <div className="duration_container">
          <AiFillCalendar className="ai_fill_calendar_icon" />
          <p className="project_duration_element">{duration}</p>
        </div>
      </div>
      <p className="project_description">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="visit_element"
      >
        Visit
      </a>
    </div>
  )
}

export default TimelineView
