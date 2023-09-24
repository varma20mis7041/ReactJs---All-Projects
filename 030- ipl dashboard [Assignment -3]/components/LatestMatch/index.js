// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails
  return (
    <div className="latest_match_bg_container">
      <div className="left_side_bg_container">
        <div className="left_side_container">
          <p className="competing_team_main_heading_element">{competingTeam}</p>
          <p className="date_element">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing_team_logo_img_element"
        />
      </div>

      <div className="right_side_container">
        <h1 className="right_side_heading_element">First Innings</h1>
        <p className="right_side_heading_answer_element">{firstInnings}</p>
        <h1 className="right_side_heading_element">Second Innings</h1>
        <p className="right_side_heading_answer_element">{secondInnings}</p>
        <h1 className="right_side_heading_element">Man Of The Match</h1>
        <p className="right_side_heading_answer_element">{manOfTheMatch}</p>
        <h1 className="right_side_heading_element">Umpires</h1>
        <p className="right_side_heading_answer_element">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
