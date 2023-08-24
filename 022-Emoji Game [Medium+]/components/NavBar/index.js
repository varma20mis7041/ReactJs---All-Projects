// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, totalScore} = props
  return (
    <div className="navbar_container">
      <div className="heading_logo_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo_element"
        />
        <h1 className="emoji_game_heading">Emoji Game</h1>
      </div>
      <div className="score_container">
        <p className="score_element">Score: {score}</p>
        <p className="total_score_element">Top Score: {totalScore}</p>
      </div>
    </div>
  )
}

export default NavBar
