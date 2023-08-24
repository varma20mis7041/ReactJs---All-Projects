// Write your code here.

import './index.css'

const WinOrLose = props => {
  const {score, onClickRestartMatch} = props

  const playAgainButtonClicked = () => {
    onClickRestartMatch()
  }

  const wonImgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const lossImgUrl =
    'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const result = score < 12 ? 'You Lose' : 'You Won'
  const resultImg = score < 12 ? lossImgUrl : wonImgUrl
  const scoreOutput = score < 12 ? 'Score' : 'Best Score'

  return (
    <div className="win_or_lose_bg_container">
      <div className="win_or_lose_navbar_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="logo"
          className="win_or_lose_emoji_logo_img_element"
        />
        <h1 className="win_or_lose_logo_heading_element">Emoji Game</h1>
      </div>
      <div className="results_page_bg_container">
        <div className="results_card_container">
          <div className="results_description_container">
            <h1 className="result_description_heading">{result}</h1>
            <div className="win_or_lose_score_container">
              <p className="score_heading_element">{scoreOutput}</p>
              <p className="score_display_element">{score}/12</p>
              <div>
                <button
                  type="button"
                  className="play_again_button"
                  onClick={playAgainButtonClicked}
                >
                  Play Again
                </button>
              </div>
            </div>
          </div>
          <div className="result_img_container">
            <img src={resultImg} alt="win or lose" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default WinOrLose
