import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem/index'
import RepositoryItem from '../RepositoryItem/index'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

const resultsStatusStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GithubPopularRepos extends Component {
  state = {
    repositoryList: [],
    filterBy: languageFiltersData[0].id,
    resultsStatus: resultsStatusStates.initial,
  }

  componentDidMount = () => {
    this.getRepositoryItems()
  }

  updateLanguage = id => {
    this.setState({filterBy: id}, this.getRepositoryItems)
  }

  getRepositoryItems = async () => {
    this.setState({resultsStatus: resultsStatusStates.loading})
    const {filterBy} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${filterBy}`
    console.log('url', url)
    const fetchedData = await fetch(url)
    if (fetchedData.ok === true) {
      const data = await fetchedData.json()
      const updatedData = data.popular_repos.map(eachRepo => ({
        name: eachRepo.name,
        id: eachRepo.id,
        issuesCount: eachRepo.issues_count,
        forksCount: eachRepo.forks_count,
        starsCount: eachRepo.stars_count,
        avatarUrl: eachRepo.avatar_url,
      }))

      console.log('updated data :', updatedData)
      this.setState({
        repositoryList: updatedData,
        resultsStatus: resultsStatusStates.success,
      })
    } else {
      this.setState({resultsStatus: resultsStatusStates.failure})
    }
  }

  renderSuccessPage = () => {
    const {repositoryList} = this.state
    return (
      <ul className="repository_bg_container">
        {repositoryList.map(eachItem => (
          <RepositoryItem repositoryItemDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLoadingPage = () => (
    <div className="loading_element_bg_container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color="#0284c7"
        width={80}
        height={80}
        className="loader_element"
      />
    </div>
  )

  renderFailureViewPage = () => (
    <div className="failure_view_bg_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure_view_img_element"
      />
      <h1 className="failure_view_heading_element">Something Went Wrong</h1>
    </div>
  )

  displayResults = status => {
    switch (status) {
      case resultsStatusStates.success:
        return this.renderSuccessPage()

      case resultsStatusStates.failure:
        return this.renderFailureViewPage()

      case resultsStatusStates.loading:
        return this.renderLoadingPage()

      default:
        return null
    }
  }

  render() {
    const {filterBy, resultsStatus} = this.state
    return (
      <div className="repos_background_container">
        <h1 className="popular_heading_element">Github Popular Repositories</h1>
        <ul className="language_filter_background_container">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              filterDetails={eachItem}
              key={eachItem.id}
              isActive={filterBy === eachItem.id}
              updateLanguage={this.updateLanguage}
            />
          ))}
        </ul>
        {this.displayResults(resultsStatus)}
      </div>
    )
  }
}

export default GithubPopularRepos
