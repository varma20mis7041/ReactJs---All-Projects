/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar/index'

import EmojiCard from '../EmojiCard/index'

import WinOrLose from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    score: 0,
    totalScore: 0,
    matchDone: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmojiItem = emojiDetails => {
    const {clickedEmojiList, score} = this.state
    let isPresent = false
    if (clickedEmojiList.length !== 0) {
      console.log(('clickedEmojisList', clickedEmojiList))
      clickedEmojiList.forEach(eachEmoji => {
        if (eachEmoji.id === emojiDetails.id) {
          isPresent = true
        }
      })
    }

    if (isPresent === true) {
      this.setState({matchDone: true})
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedEmojiList: [...prevState.clickedEmojiList, emojiDetails],
      }))
    }
    if (score === 11 && isPresent === false) {
      console.log('last element')
      this.setState({matchDone: true})
    }

    console.log('isEmojiPresent', isPresent)
  }

  onClickRestartMatch = () => {
    const {score, totalScore} = this.state
    let updatedTotalScore = totalScore
    if (score >= totalScore) {
      updatedTotalScore = score
    }
    this.setState({
      matchDone: false,
      clickedEmojiList: [],
      score: 0,
      totalScore: updatedTotalScore,
    })
  }

  renderComponent(matchDone) {
    const {score, totalScore} = this.state
    if (matchDone) {
      return (
        <WinOrLose
          score={score}
          totalScore={totalScore}
          onClickRestartMatch={this.onClickRestartMatch}
        />
      )
    }
    return (
      <div className="emoji_game_bg_container">
        <NavBar score={score} totalScore={totalScore} />
        <ul className="emoji_items_container">
          {this.shuffledEmojisList().map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              key={eachEmoji.id}
              onClickEmojiItem={this.onClickEmojiItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {matchDone} = this.state
    console.log('match status :', matchDone)
    return this.renderComponent(matchDone)
  }
}

export default EmojiGame
