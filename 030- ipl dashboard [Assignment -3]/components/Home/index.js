// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard/index'

class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}

  componentDidMount() {
    this.getiplTeamsData()
  }

  getiplTeamsData = async () => {
    const responseData = await fetch('https://apis.ccbp.in/ipl')
    const data = await responseData.json()
    console.log('teams list from fetched url', data.teams)
    const updatedIplTeamsList = data.teams.map(teamItem => {
      const newIplTeamListItem = {
        name: teamItem.name,
        id: teamItem.id,
        teamImgUrl: teamItem.team_image_url,
      }
      return newIplTeamListItem
    })
    console.log('updated_list', updatedIplTeamsList)
    this.setState({iplTeamsList: updatedIplTeamsList, isLoading: false})
  }

  render() {
    const {iplTeamsList, isLoading} = this.state
    return (
      <div className="ipl_teams_bg_container">
        <div className="ipl_teams_card_container">
          <div className="main_heading_and_logo_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo_element"
            />
            <h1 className="home_page_main_heading">IPL Dashboard</h1>
          </div>

          {isLoading ? (
            <div>
              <Loader
                type="Oval"
                color="#ffffff"
                height={50}
                className="home_loader"
              />
            </div>
          ) : (
            <ul className="ipl_teams_container">
              {iplTeamsList.map(eachTeam => (
                <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
