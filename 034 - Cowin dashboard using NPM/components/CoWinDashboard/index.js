// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage/index'
import VaccinationByGender from '../VaccinationByGender/index'
import VaccinationByAge from '../VaccinationByAge/index'

import './index.css'

const activeStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    currentState: activeStates.loading,
    lastSevenDaysVaccination: [],
    vaccinationByAgeData: [],
    vaccinationByGenderData: [],
  }

  componentDidMount() {
    this.getCoWinData()
  }

  getCoWinData = async () => {
    this.setState({currentState: activeStates.loading})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const fetchedData = await fetch(url)
    if (fetchedData.ok === true) {
      const fetchedDataResult = await fetchedData.json()

      this.setState({
        lastSevenDaysVaccination: fetchedDataResult.last_7_days_vaccination,
        vaccinationByGenderData: fetchedDataResult.vaccination_by_gender,
        vaccinationByAgeData: fetchedDataResult.vaccination_by_age,
        currentState: activeStates.success,
      })
    } else {
      this.setState({currentState: activeStates.failure})
    }
  }

  renderFailurePage = () => (
    <div className="failure_page_bg_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure_view_img_element"
      />
      <h1 className="failure_view_main_heading">Something went wrong</h1>
    </div>
  )

  renderLoadingPage = () => (
    <div data-testid="loader" className="loader_bg_container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderCowinDashBoards = () => {
    const {
      lastSevenDaysVaccination,
      vaccinationByGenderData,
      vaccinationByAgeData,
    } = this.state
    // console.log('in render', lastSevenDaysVaccination)

    // console.log('in render', vaccinationByGenderData)

    console.log('in render vaccination by age', vaccinationByAgeData)
    return (
      <>
        <VaccinationCoverage
          lastSevenDaysVaccination={lastSevenDaysVaccination}
        />
        <VaccinationByGender
          vaccinationByGenderData={vaccinationByGenderData}
        />
        <VaccinationByAge vaccinationByAgeData={vaccinationByAgeData} />
      </>
    )
  }

  renderCowinDashBoardResults = () => {
    const {currentState} = this.state
    switch (currentState) {
      case activeStates.success:
        return this.renderCowinDashBoards()
      case activeStates.loading:
        return this.renderLoadingPage()
      case activeStates.failure:
        return this.renderFailurePage()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin_dashboard_bg_container">
        <div className="logo_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website_logo"
          />
          <h1 className="logo_heading_element">Co-WIN</h1>
        </div>
        <h1 className="main_heading">CoWIN Vaccination in India</h1>
        {this.renderCowinDashBoardResults()}
      </div>
    )
  }
}

export default CowinDashboard
