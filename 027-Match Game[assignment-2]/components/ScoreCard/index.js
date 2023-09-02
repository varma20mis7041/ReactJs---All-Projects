import './index.css'

const ScoreCard = props => {
  const {scoreDetails, onClickPlayAgain} = props

  const playAgainButtonClicked = () => {
    onClickPlayAgain()
  }
  return (
    <div className="scorecard_card_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy_img_element"
      />
      <p className="your_score_element">YOUR SCORE</p>
      <p className="scorecard_score_element">{scoreDetails}</p>
      <button
        type="button"
        className="scorecard_play_again_button"
        onClick={playAgainButtonClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="play_again_img_element"
        />{' '}
        PLAY AGAIN
      </button>
    </div>
  )
}
export default ScoreCard
