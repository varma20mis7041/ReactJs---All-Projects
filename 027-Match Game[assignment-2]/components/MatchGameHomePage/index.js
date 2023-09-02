import {Component} from 'react'

import './index.css'

import CategoryCard from '../CategoryCard/index'
import MatchImageItem from '../MatchImageItem/index'
import ScoreCard from '../ScoreCard/index'

class MatchGameHomePage extends Component {
  constructor(props) {
    super(props)
    const tempIndex = Math.ceil(Math.floor(Math.random() * 30))
    this.state = {
      category: 'FRUIT',
      imageStateIndex: tempIndex,
      score: 0,
      seconds: 60,
      showScoreCard: false,
    }
  }

  componentDidMount() {
    this.timerid = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {seconds, showScoreCard} = this.state
    if (seconds > 0 && showScoreCard === false) {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    } else {
      this.setState({showScoreCard: true})
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      seconds: 60,
      score: 0,
      category: 'FRUIT',
      showScoreCard: false,
    })
  }

  onClickMatchImage = id => {
    const {imageStateIndex} = this.state
    const {imagesList} = this.props
    const imageId = imagesList[imageStateIndex].id
    if (imageId === id) {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({showScoreCard: true})
    }
    this.setState({
      imageStateIndex: Math.ceil(Math.floor(Math.random() * imagesList.length)),
    })
  }

  onClickChangeTab = tabId => {
    this.setState({category: tabId})
  }

  render() {
    const {
      score,
      category,
      imageStateIndex,
      seconds,
      showScoreCard,
    } = this.state
    // console.log('shuffledList in render function :', shuffledList)
    const {imagesList, tabsList} = this.props
    const specificCategoryList = imagesList.filter(
      eachImageItem => eachImageItem.category === category,
    )
    const imageList = imagesList.map(eachImageItem => {
      const imageDetails = {
        id: eachImageItem.id,
        imageUrl: eachImageItem.imageUrl,
      }
      return imageDetails
    })

    return (
      <div className="match_game_bg_container">
        <nav className="navbar_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website_logo_img_element
        "
          />
          <ul className="score_and_timer_container">
            <li className="score_element">
              <p>
                Score: <span className="score">{score}</span>
              </p>
            </li>
            <li className="timer_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer_img_element"
              />
              <p className="timer_element">
                <span className="seconds">{seconds}</span> sec
              </p>
            </li>
          </ul>
        </nav>

        {!showScoreCard && (
          <div className="match_game_card_container">
            <ul className="image_container">
              <img
                className="image_img_element"
                src={imageList[imageStateIndex].imageUrl}
                alt="match"
              />
            </ul>
            <ul className="tabs_list_container">
              {tabsList.map(eachTab => (
                <CategoryCard
                  categoryDetails={eachTab}
                  isTabActive={category === eachTab.tabId}
                  onClickChangeTab={this.onClickChangeTab}
                  key={eachTab.tabId}
                />
              ))}
            </ul>
            <div className="bottom_section">
              <ul className="thumbnail_list_container">
                {specificCategoryList.map(eachThumbnailImg => (
                  <MatchImageItem
                    thumbnailDetails={eachThumbnailImg}
                    onClickMatchImage={this.onClickMatchImage}
                    key={eachThumbnailImg.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
        {showScoreCard && (
          <div className="score_card_container">
            <ScoreCard
              scoreDetails={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          </div>
        )}
      </div>
    )
  }
}
export default MatchGameHomePage
