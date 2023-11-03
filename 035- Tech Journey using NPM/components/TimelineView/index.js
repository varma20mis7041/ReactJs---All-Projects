// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard/index'
import ProjectTimelineCard from '../ProjectTimelineCard/index'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    const courseTimelineCardListItems = timelineItemsList.filter(
      eachItem => eachItem.categoryId === 'COURSE',
    )
    const projectTimelineCardListItems = timelineItemsList.filter(
      eachItem => eachItem.categoryId === 'PROJECT',
    )

    const timeLineDateItems = timelineItemsList.map(eachItem => ({
      title: eachItem.title,
    }))

    console.log('courseItemsList:', courseTimelineCardListItems)
    console.log('projectItemsList', projectTimelineCardListItems)
    console.log('time_line', timelineItemsList)
    console.log('date_title', timeLineDateItems)

    return (
      <div className="timeline_bg_container">
        <h1 className="main_heading">MY JOURNEY OF CCBP 4.0</h1>
        {/* {courseTimelineCardListItems.map(eachItem => (
          <CourseTimelineCard itemDetails={eachItem} key={eachItem.id} />
        ))} */}

        <Chrono
          items={timeLineDateItems}
          mode="VERTICAL_ALTERNATING"
          className="chrono_component_element"
        >
          {timelineItemsList.map(eachItem => {
            console.log(eachItem.categoryId)
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard itemDetails={eachItem} key={eachItem.id} />
              )
            }
            return (
              <ProjectTimelineCard itemDetails={eachItem} key={eachItem.id} />
            )
          })}
        </Chrono>
      </div>
    )
  }
}
export default TimelineView
