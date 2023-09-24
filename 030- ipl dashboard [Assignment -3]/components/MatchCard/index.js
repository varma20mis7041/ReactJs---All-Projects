// Write your code here
import './index.css'

const MatchCard = props => {
  const {resultDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = resultDetails
  return (
    <li className="result_card_container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="result_section_competing_team_logo_img_element"
      />
      <p className="competing_team_element">{competingTeam}</p>
      <p className="recent_matches_result">{result}</p>
      <p
        className={`match_status_element ${
          matchStatus === 'Lost' ? 'red' : 'green'
        }`}
      >
        {matchStatus}
      </p>
    </li>
  )
}
export default MatchCard
