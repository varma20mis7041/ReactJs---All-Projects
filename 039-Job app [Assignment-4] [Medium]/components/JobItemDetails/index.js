import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {AiFillStar} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {FaSuitcase} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'

import Cookies from 'js-cookie'

import Header from '../Header'
import SkillItem from '../SkillItem'
import SimilarJobItem from '../SimilarJobItem'

const jobItemDetailsActiveStateConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobItemDetails extends Component {
  state = {
    jobItemDetails: {},
    similarJobList: [],
    activeState: jobItemDetailsActiveStateConstants.initial,
  }

  componentDidMount() {
    this.getJobItemDetails()
  }

  getJobItemDetails = async () => {
    this.setState({activeState: jobItemDetailsActiveStateConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedJobDetails = data.job_details
      const fetchedSimilarJobsList = data.similar_jobs
      const updatedJobDetails = {
        companyLogoUrl: fetchedJobDetails.company_logo_url,
        companyWebsiteUrl: fetchedJobDetails.company_website_url,
        employmentType: fetchedJobDetails.employment_type,
        id: fetchedJobDetails.id,
        jobDescription: fetchedJobDetails.job_description,
        skills: fetchedJobDetails.skills,
        lifeAtCompany: fetchedJobDetails.life_at_company,
        location: fetchedJobDetails.location,
        packagePerAnnum: fetchedJobDetails.package_per_annum,
        rating: fetchedJobDetails.rating,
        title: fetchedJobDetails.title,
      }

      const updatedSimilarJobsList = fetchedSimilarJobsList.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        rating: eachJob.rating,
        title: eachJob.title,
      }))

      this.setState({
        jobItemDetails: updatedJobDetails,
        similarJobList: updatedSimilarJobsList,
        activeState: jobItemDetailsActiveStateConstants.success,
      })
      //  console.log('updated_job_details', updatedJobDetails)
    } else {
      this.setState({activeState: jobItemDetailsActiveStateConstants.failure})
    }
  }

  displayJobItemDetailsLoadingView = () => (
    <div className="job_details_loader_container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  displayJobDetailsView = (jobItemDetails, activeState, similarJobList) => {
    switch (activeState) {
      case jobItemDetailsActiveStateConstants.success:
        return this.displayJobItemDetailsSuccessfulView(
          jobItemDetails,
          similarJobList,
        )
      case jobItemDetailsActiveStateConstants.failure:
        return this.displayJobItemDetailsFailureView()
      case jobItemDetailsActiveStateConstants.loading:
        return this.displayJobItemDetailsLoadingView()
      default:
        return null
    }
  }

  displayJobItemDetailsSuccessfulView = (job, similarJobList) => {
    console.log('job in final:', job)
    const lifeAtCompanyDescription = job.lifeAtCompany.description
    const lifeAtCompanyImageUrl = job.lifeAtCompany.image_url

    return (
      <div className="job_item_details_and_similar_jobs_container">
        <div className="job_item_details_container">
          <div className="job_item_top_section">
            <div className="company_url_and_job_role_container">
              <img
                src={job.companyLogoUrl}
                alt="job details company logo"
                className="job_details_company_logo_element"
              />
              <div className="job_role_and_rating_container">
                <h1 className="job_details_item_title_heading">{job.title}</h1>
                <div className="rating_container">
                  <AiFillStar size={20} className="star_icon" />
                  <p className="job_details_rating_element">{job.rating}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="job_item_middle_section_container">
            <div className="job_item_middle_section_left_container">
              <div className="location_container">
                <HiLocationMarker size={20} className="location_icon" />
                <p className="job_details_location_element">{job.location}</p>
              </div>
              <div className="employment_type_container">
                <FaSuitcase size={20.5} className="suitcase_icon" />
                <p className="job_details_employment_type_element">
                  {job.employmentType}
                </p>
              </div>
            </div>
            <p className="job_details_salary_package_element">
              {job.packagePerAnnum}
            </p>
          </div>
          <hr size={5} color="#475569" />
          <div className="job_item_details_description_container">
            <h1 className="job_details_description_heading">Description</h1>

            <a
              className="visit_element"
              href={job.companyWebsiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit{' '}
              <span className="link_icon_span_element">
                {' '}
                <BiLinkExternal size={20} color="#6366f1" />
              </span>
            </a>
          </div>
          <p className="job_details_job_description_element">
            {job.jobDescription}
          </p>
          <h1 className="skills_main_heading">Skills</h1>
          <ul className="skills_list_container">
            {job.skills.map(eachSkill => (
              <SkillItem skillDetails={eachSkill} key={eachSkill.name} />
            ))}
          </ul>
          <h1 className="life_at_company_main_heading">Life at Company</h1>
          <div className="life_at_company_container">
            <p className="life_at_company_description_element">
              {lifeAtCompanyDescription}
            </p>
            <img
              src={lifeAtCompanyImageUrl}
              className="life_at_company_url_element"
              alt="life at company"
            />
          </div>
        </div>
        <div className="similar_jobs_bg_container">
          <h1 className="similar_jobs_main_heading">Similar Jobs</h1>
          <ul className="similar_jobs_container">
            {similarJobList.map(eachJob => (
              <SimilarJobItem similarJobDetails={eachJob} key={eachJob.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  displayJobItemDetailsFailureView = () => (
    <div className="job_item_details_failure_view_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="job_item_details_failure_view_img_element"
      />

      <h1 className="job_item_details_failure_view_main_heading">
        Oops! Something Went Wrong
      </h1>
      <p className="job_item_details_failure_view_description">
        We cannot seem to find the page you are looking for
      </p>
      <button
        className="job_item_details_retry_button"
        type="button"
        onClick={this.onClickRetryButton}
      >
        Retry
      </button>
    </div>
  )

  onClickRetryButton = () => this.getJobItemDetails()

  render() {
    const {jobItemDetails, activeState, similarJobList} = this.state
    console.log('jobDetails', jobItemDetails)
    return (
      <div className="header_and_job_details_container">
        <Header />
        <div className="job_details_view_bg_container">
          {this.displayJobDetailsView(
            jobItemDetails,
            activeState,
            similarJobList,
          )}
        </div>
      </div>
    )
  }
}

export default JobItemDetails
