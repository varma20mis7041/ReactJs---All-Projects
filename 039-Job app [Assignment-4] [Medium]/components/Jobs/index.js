import './index.css'

import Loader from 'react-loader-spinner'

import {BsSearch} from 'react-icons/bs'
import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header/index'
import ProfileSection from '../ProfileSection'
import EmployeeTypeItem from '../EmployeeTypeItem/index'
import SalaryRangeItem from '../SalaryRangeItem/index'
import JobItem from '../JobItem/index'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const jobRouteStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Jobs extends Component {
  state = {
    jobsList: [],
    activeState: '',
    searchedInput: '',
    employeeTypeList: [],
    minimumPackage: '',
  }

  componentDidMount() {
    this.getJobsList()
  }

  onChangeSearchInput = event => {
    this.setState({searchedInput: event.target.value})
  }

  onClickEnter = event => {
    console.log(event.key)
    if (event.key === 'Enter') {
      this.getJobsList()
    }
  }

  onClickSearchButton = () => this.getJobsList()

  onClickEmployeeType = newEmployeeType => {
    const {employeeTypeList} = this.state

    const isEmployeePresent = employeeTypeList.includes(newEmployeeType)
    console.log('isEmployeePresent', isEmployeePresent)
    let newEmployeeTypeList = []
    if (isEmployeePresent === true) {
      newEmployeeTypeList = employeeTypeList.filter(
        type => type !== newEmployeeType,
      )
    } else {
      newEmployeeTypeList = [...employeeTypeList, newEmployeeType]
    }

    console.log(
      'newEmploymentList in onClickEmployeeTypeFunction',
      newEmployeeTypeList,
    )

    this.setState({employeeTypeList: newEmployeeTypeList}, this.getJobsList)
  }

  onClickSalaryRange = newSalaryRange => {
    // console.log('new salary range', newSalaryRange)
    this.setState({minimumPackage: newSalaryRange}, this.getJobsList)
  }

  onClickRetryButton = () => {
    this.getJobsList()
  }

  getJobsList = async () => {
    this.setState({activeState: jobRouteStates.loading})
    const {searchedInput, employeeTypeList, minimumPackage} = this.state

    const combinedEmployeeTypes = employeeTypeList.join(',')
    console.log('combinedEmployeeTypes', combinedEmployeeTypes)
    console.log('searchInputWhileFetching', searchedInput)
    const url = `https://apis.ccbp.in/jobs?employment_type=${combinedEmployeeTypes}&minimum_package=${minimumPackage}&search=${searchedInput}`

    console.log('url', url)
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedJobsList = data.jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))

      this.setState({
        jobsList: updatedJobsList,
        activeState: jobRouteStates.success,
      })
    } else {
      this.setState({activeState: jobRouteStates.failure})
    }
  }

  renderFiltersSection = () => (
    <div className="profile_and_filters_container">
      <ProfileSection />
      <hr color="#475569" />
      <h1 className="employment_main_heading">Type of Employment</h1>
      <ul className="employment_type_filter_container">
        {employmentTypesList.map(eachType => (
          <EmployeeTypeItem
            employeeDetails={eachType}
            key={eachType.employmentTypeId}
            onClickEmployeeType={this.onClickEmployeeType}
          />
        ))}
      </ul>
      <hr color="#475569" />
      <h1 className="salary_range_heading_element">Salary Range</h1>
      <ul className="salary_list_items_container">
        {salaryRangesList.map(eachItem => (
          <SalaryRangeItem
            salaryRangeDetails={eachItem}
            key={eachItem.salaryRangeId}
            onClickSalaryRange={this.onClickSalaryRange}
          />
        ))}
      </ul>
    </div>
  )

  renderSearchBarContainer = searchedInput => (
    <div className="search_bar_container_lg">
      <input
        type="search"
        className="search_input_element"
        placeholder="Search"
        onChange={this.onChangeSearchInput}
        onKeyDown={this.onClickEnter}
        value={searchedInput}
      />
      <button
        type="button"
        data-testid="searchButton"
        aria-label="Search"
        className="search_icon_button"
        onClick={this.onClickSearchButton}
      >
        <BsSearch size={15} className="search_icon" />
      </button>
    </div>
  )

  renderSearchBarContainerForSmallScreen = searchedInput => (
    <div className="search_bar_container_sm">
      <input
        type="search"
        className="search_input_element"
        placeholder="Search"
        onChange={this.onChangeSearchInput}
        onKeyDown={this.onClickEnter}
        value={searchedInput}
      />
      <button
        type="button"
        data-testid="searchButton"
        aria-label="Search"
        className="search_icon_button"
        onClick={this.onClickSearchButton}
      >
        <BsSearch size={15} className="search_icon" />
      </button>
    </div>
  )

  renderJobItems = jobsList => {
    if (jobsList.length === 0) {
      return this.displayNoJobsFoundPage()
    }
    return (
      <ul className="jobs_list_items_container">
        {jobsList.map(jobItem => (
          <JobItem jobDetails={jobItem} key={jobItem.id} />
        ))}
      </ul>
    )
  }

  renderLoadingPage = () => (
    <div className="loader_container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  displayJobItemsSection = (jobList, activeState) => {
    switch (activeState) {
      case jobRouteStates.success:
        return this.renderJobItems(jobList)
      case jobRouteStates.loading:
        //  console.log('loading')
        return this.renderLoadingPage()
      case jobRouteStates.failure:
        return this.displayFailureView()
      default:
        return null
    }
  }

  displayNoJobsFoundPage = () => (
    <div className="not_jobs_section_bg_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="no_jobs_img_element"
      />
      <h1 className="no_jobs_found_main_heading">No Jobs Found</h1>
      <p className="no_jobs_found_description">
        We could not find any jobs. Try other filters
      </p>
    </div>
  )

  displayFailureView = () => (
    <div className="failure_view_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure_view_img_element"
      />

      <h1 className="failure_view_main_heading">Oops! Something Went Wrong</h1>
      <p className="failure_view_description">
        We cannot seem to find the page you are looking for
      </p>
      <button
        className="retry_button"
        type="button"
        onClick={this.onClickRetryButton}
      >
        Retry
      </button>
    </div>
  )

  render() {
    const {jobsList, activeState, searchedInput} = this.state
    // console.log('searchedInputInRender', searchedInput)
    // console.log('employee_type', employeeTypeList)

    return (
      <div className="jobs_and_header_component_container">
        <Header />
        {this.renderSearchBarContainerForSmallScreen(searchedInput)}
        <div className="jobs_route_bg_container">
          {this.renderFiltersSection()}

          <div className="job_items_and_search_container">
            {this.renderSearchBarContainer(searchedInput)}
            {this.displayJobItemsSection(jobsList, activeState)}
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
