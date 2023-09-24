// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    bannerImgUrl: '',
    latestMatchDetails: {},
    matchResult: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchTeamMatchDetailsData()
  }

  fetchTeamMatchDetailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const responseData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const dataArray = await responseData.json()
    console.log('response_from_api_call', dataArray)
    const fetchedLatestMatchDetails = dataArray.latest_match_details
    // console.log('latest match details :', fetchedLatestMatchDetails)
    const updatedLatestMatchDetails = {
      competingTeam: fetchedLatestMatchDetails.competing_team,
      date: fetchedLatestMatchDetails.date,
      venue: fetchedLatestMatchDetails.venue,
      result: fetchedLatestMatchDetails.result,
      competingTeamLogo: fetchedLatestMatchDetails.competing_team_logo,
      firstInnings: fetchedLatestMatchDetails.first_innings,
      secondInnings: fetchedLatestMatchDetails.second_innings,
      manOfTheMatch: fetchedLatestMatchDetails.man_of_the_match,
      umpires: fetchedLatestMatchDetails.umpires,
    }
    const matchResults = dataArray.recent_matches
    const updatedMatchResults = matchResults.map(eachResult => {
      const matchResult = {
        id: eachResult.id,
        competingTeamLogo: eachResult.competing_team_logo,
        competingTeam: eachResult.competing_team,
        result: eachResult.result,
        matchStatus: eachResult.match_status,
      }
      return matchResult
    })
    console.log('updated_match_results :', updatedMatchResults)
    this.setState({
      bannerImgUrl: dataArray.team_banner_url,
      latestMatchDetails: updatedLatestMatchDetails,
      matchResult: updatedMatchResults,
      isLoading: false,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {
      bannerImgUrl,
      latestMatchDetails,
      matchResult,
      isLoading,
    } = this.state
    console.log(id)
    console.log('latestMatchDetils :', latestMatchDetails)

    return (
      <div className={`team_matches_bg_container ${id}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <img
              src={bannerImgUrl}
              alt="team banner"
              className="banner_url_element"
            />
            <div className="latest_matches_heading_container">
              <h1 className="heading_element">Latest Matches</h1>
            </div>
            <LatestMatch matchDetails={latestMatchDetails} />
            <ul className="match_results_bg_container">
              {matchResult.map(eachResult => (
                <MatchCard resultDetails={eachResult} key={eachResult.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
