// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {heads: true, headsCount: 0, tailsCount: 0}

  onTossClicked = () => {
    const {headsCount} = this.state
    const {tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult % 2 === 0) {
      this.setState({
        heads: true,
        headsCount: headsCount + 1,
      })
    } else {
      this.setState({
        heads: false,
        tailsCount: tailsCount + 1,
      })
    }
  }

  render() {
    const headTossImgUrl =
      'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailTossImgUrl =
      'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    const {heads} = this.state
    const tossDisplayUrl = heads ? headTossImgUrl : tailTossImgUrl

    const {headsCount} = this.state
    const {tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="coin_toss_page_background_container">
        <div className="coin_toss_card_background_container">
          <h1 className="coin_toss_page_main_heading">Coin Toss Game</h1>
          <p className="coin_toss_page_description">Heads (or) Tails</p>
          <img src={tossDisplayUrl} className="toss_image" alt="toss result" />
          <button
            type="button"
            className="toss_coin_btn_element"
            onClick={this.onTossClicked}
          >
            Toss Coin
          </button>
          <div className="toss_counting_container">
            <p>Total:{totalCount}</p>
            <p>Heads:{headsCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
