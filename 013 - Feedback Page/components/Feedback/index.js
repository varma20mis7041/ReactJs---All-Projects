// Write your React code here.
import {Component} from 'react'

import './index.css'

import Emojis from '../Emojis/index'

class Feedback extends Component {
  state = {emojiClicked: false}

  onClickedEmoji = () => {
    this.setState(previousState => ({
      emojiClicked: !previousState.emojiClicked,
    }))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    // const loveUrl = resources[1]
    const mainPage = (
      <div className="feedback_page_card_container">
        <h1 className="feedback_main_heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emoji_ul_container">
          {emojis.map(eachEmoji => (
            <Emojis
              emojisDetails={eachEmoji}
              key={eachEmoji.id}
              onClickedEmoji={this.onClickedEmoji}
            />
          ))}
        </ul>
      </div>
    )
    const thankyouPage = (
      <div className="thank_you_page_background_container">
        <img src={loveEmojiUrl} alt="love emoji" className="love_img" />
        <h1 className="thank_you_heading">Thank You</h1>
        <p className="thank_you_page_discription">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
    const {emojiClicked} = this.state
    let pageToShow
    if (emojiClicked === false) {
      pageToShow = mainPage
    } else {
      pageToShow = thankyouPage
    }
    return (
      <div className="feedback_page_background_container">{pageToShow}</div>
    )
  }
}

export default Feedback
