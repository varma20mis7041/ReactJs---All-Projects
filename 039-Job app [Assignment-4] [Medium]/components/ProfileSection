import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import './index.css'

const profileActiveStateConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ProfileSection extends Component {
  state = {
    profileDetails: {},
    activeState: profileActiveStateConstants.initial,
  }

  componentDidMount() {
    this.getProfileDetails()
  }

  onClickProfileSectionRetryButton = () => this.getProfileDetails()

  getProfileDetails = async () => {
    this.setState({activeState: profileActiveStateConstants.loading})
    const url = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    console.log('response ok', response.ok)
    if (response.ok === true) {
      const data = await response.json()
      // console.log('data', data.profile_details)
      const profileDetails = data.profile_details
      const updatedProfileDetails = {
        name: profileDetails.name,
        profileImageUrl: profileDetails.profile_image_url,
        shortBio: profileDetails.short_bio,
      }
      // console.log('profile details', updatedProfileDetails)
      this.setState({
        profileDetails: updatedProfileDetails,
        activeState: profileActiveStateConstants.success,
      })
    } else {
      this.setState({activeState: profileActiveStateConstants.failure})
    }
  }

  displayProfileSuccessView = () => {
    const {profileDetails} = this.state
    const {profileImageUrl, shortBio} = profileDetails
    //  const {name} = profileDetails
    return (
      <div className="profile_bg_container">
        <img
          src={profileImageUrl}
          alt="profile"
          className="profile_img_element"
        />
        <h1 className="profile_name">Bhargav varma</h1>
        <p className="bio_element">{shortBio}</p>
      </div>
    )
  }

  displayLoadingView = () => (
    <div className="loader_profile_container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  displayProfileFailureView = () => (
    <div className="profile_section_failure_view_container">
      <button
        className="profile_section_retry_button"
        type="button"
        onClick={this.onClickProfileSectionRetryButton}
      >
        Retry
      </button>
    </div>
  )

  displayProfileContainerView = activeState => {
    switch (activeState) {
      case profileActiveStateConstants.loading:
        return this.displayLoadingView()
      case profileActiveStateConstants.success:
        return this.displayProfileSuccessView()
      case profileActiveStateConstants.failure:
        return this.displayProfileFailureView()
      default:
        return null
    }
  }

  render() {
    const {activeState} = this.state
    return (
      <div className="profile_card_container">
        {this.displayProfileContainerView(activeState)}
      </div>
    )
  }
}
export default ProfileSection
