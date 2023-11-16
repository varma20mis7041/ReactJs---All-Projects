import './index.css'
import {AiFillStar} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {FaSuitcase} from 'react-icons/fa'

import {Link} from 'react-router-dom'

const JobItem = props => {
  const {jobDetails} = props
  const {
    id,
    companyLogoUrl,
    location,
    employmentType,
    jobDescription,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails
  return (
    <li className="job_item_bg_container">
      <Link to={`/jobs/${id}`} className="link_in_jobitem">
        <div className="job_item_top_section">
          <div className="company_url_and_job_role_container">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="company_logo_element"
            />
            <div className="job_role_and_rating_container">
              <h1 className="job_item_title_heading">{title}</h1>
              <div className="rating_container">
                <AiFillStar size={20} className="star_icon" />
                <p className="rating_element">{rating}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="job_item_middle_section_container">
          <div className="job_item_middle_section_left_container">
            <div className="location_container">
              <HiLocationMarker size={20} className="location_icon" />
              <p className="location_element">{location}</p>
            </div>
            <div className="employment_type_container">
              <FaSuitcase className="suitcase_icon" size={20.5} />
              <p className="employment_type_element">{employmentType}</p>
            </div>
          </div>
          <p className="salary_package_element">{packagePerAnnum}</p>
        </div>
        <hr color="#475569" />
        <div className="description_container">
          <h1 className="description_heading">Description</h1>
          <p className="job_description_element">{jobDescription}</p>
        </div>
      </Link>
    </li>
  )
}
export default JobItem
