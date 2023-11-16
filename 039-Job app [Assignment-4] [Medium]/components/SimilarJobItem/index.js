import './index.css'
import {AiFillStar} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {FaSuitcase} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'

const SimilarJobItem = props => {
  const {similarJobDetails} = props
  console.log('similar_job_details:', similarJobDetails)
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
    id,
  } = similarJobDetails

  const onClickSimilarJobItem = () => {
    const {history} = props

    history.push(`/jobs/${id}`)
    window.location.reload()
  }

  return (
    <li
      className="similar_job_item_card_container"
      onClick={onClickSimilarJobItem}
    >
      <div className="company_url_and_job_role_container">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
          className="similar_job_item_company_logo_element"
        />
        <div className="job_role_and_rating_container">
          <h1 className="similar_job_item_title_heading">{title}</h1>
          <div className="rating_container">
            <AiFillStar size={20} className="star_icon" />
            <p className="similar_jog_item_rating_element">{rating}</p>
          </div>
        </div>
      </div>
      <h1 className="similar_job_item_description_main_heading">Description</h1>
      <p className="similar_job_item_description_element">{jobDescription}</p>
      <div className="similar_job_item_location_and_employment_type_container">
        <div className="location_container">
          <HiLocationMarker size={20} className="location_icon" />
          <p className="location_element">{location}</p>
        </div>
        <div className="employment_type_container">
          <FaSuitcase className="suitcase_icon" />
          <p className="employment_type_element">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}
export default withRouter(SimilarJobItem)
