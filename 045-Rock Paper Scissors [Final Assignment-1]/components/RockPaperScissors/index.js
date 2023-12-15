import {Component} from 'react'
import PlayViewButton from '../PlayingViewButton'
import RulesPopup from '../RulesPopup'
import {
  RPSBackgroundContainer,
  ScoreCardBgContainer,
  HeadingText,
  PlayingViewBackgroundContainer,
  PlayingViewButtonContainer,
  ScoreContainer,
  GameResultsView,
  UserAndOpponentSelectedOptionViewContainer,
  SelectedOptionContainer,
  CustomImageElementInGameResultsView,
  GameViewResultText,
  CustomPlayAgainButton,
  RulesButtonBgContainer,
} from './StyledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const opponentRandomSelection = () => {
  const index = Math.floor(Math.random() * 3)
  return choicesList[index]
}

class RockPaperScissors extends Component {
  state = {
    resultScore: 0,
    playingView: true,
    opponentSelectedOption: opponentRandomSelection(),
    userSelectedOption: {},
    resultText: '',
  }

  onClickUpdateUserOption = id => {
    const selectedOption = choicesList.find(eachChoice => eachChoice.id === id)
    this.setState(
      {
        userSelectedOption: selectedOption,
        playingView: false,
      },
      this.updateResultText,
    )
  }

  displayPlayingView = () => (
    <PlayingViewBackgroundContainer>
      <PlayingViewButtonContainer>
        <PlayViewButton
          buttonDetails={choicesList[0]}
          onClickUpdateUserOption={this.onClickUpdateUserOption}
        />
        <PlayViewButton
          buttonDetails={choicesList[1]}
          onClickUpdateUserOption={this.onClickUpdateUserOption}
        />
      </PlayingViewButtonContainer>
      <PlayingViewButtonContainer>
        <PlayViewButton
          buttonDetails={choicesList[2]}
          onClickUpdateUserOption={this.onClickUpdateUserOption}
        />
      </PlayingViewButtonContainer>
    </PlayingViewBackgroundContainer>
  )

  updateResultText = () => {
    const {userSelectedOption, opponentSelectedOption} = this.state
    const userId = userSelectedOption.id
    const opponentId = opponentSelectedOption.id
    let result = ''
    if (userId === opponentId) {
      result = 'IT IS DRAW'
    } else if (
      (userId === 'ROCK' && opponentId === 'SCISSORS') ||
      (userId === 'SCISSORS' && opponentId === 'PAPER') ||
      (userId === 'PAPER' && opponentId === 'ROCK')
    ) {
      result = 'YOU WON'
      this.setState(prevState => ({resultScore: prevState.resultScore + 1}))
    } else {
      result = 'YOU LOSE'
      this.setState(prevState => ({resultScore: prevState.resultScore - 1}))
    }
    this.setState({resultText: result})
  }

  onClickPlayAgain = () => {
    this.setState({
      playingView: true,
      opponentSelectedOption: opponentRandomSelection(),
    })
  }

  displayGameResultsView = (userSelectedOption, opponentSelectedOption) => {
    const {resultText} = this.state
    console.log('userSelection', userSelectedOption.imageUrl)
    console.log('opponentSelected:', opponentSelectedOption.imageUrl)
    return (
      <GameResultsView>
        <UserAndOpponentSelectedOptionViewContainer>
          <SelectedOptionContainer>
            <HeadingText gameResult="true">YOU</HeadingText>
            <CustomImageElementInGameResultsView
              alt="your choice"
              src={userSelectedOption.imageUrl}
            />
          </SelectedOptionContainer>
          <SelectedOptionContainer>
            <HeadingText gameResult="true">OPPONENT</HeadingText>
            <CustomImageElementInGameResultsView
              alt="opponent choice"
              src={opponentSelectedOption.imageUrl}
            />
          </SelectedOptionContainer>
        </UserAndOpponentSelectedOptionViewContainer>
        <GameViewResultText as="p">{resultText}</GameViewResultText>
        <CustomPlayAgainButton onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </CustomPlayAgainButton>
      </GameResultsView>
    )
  }

  render() {
    console.log(choicesList)
    const {
      playingView,
      opponentSelectedOption,
      userSelectedOption,
      resultScore,
    } = this.state
    console.log('opponent_selection:', opponentSelectedOption.imageUrl)

    return (
      <RPSBackgroundContainer>
        <ScoreCardBgContainer>
          <div>
            <HeadingText>Rock</HeadingText>
            <HeadingText>PAPER</HeadingText>
            <HeadingText>SCISSORS</HeadingText>
          </div>
          <ScoreContainer>
            <HeadingText score as="p">
              Score
            </HeadingText>
            <HeadingText score result="true" as="p" gameResult="true">
              {resultScore}
            </HeadingText>
          </ScoreContainer>
        </ScoreCardBgContainer>
        {playingView
          ? this.displayPlayingView()
          : this.displayGameResultsView(
              userSelectedOption,
              opponentSelectedOption,
            )}
        <RulesButtonBgContainer>
          <RulesPopup />
        </RulesButtonBgContainer>
      </RPSBackgroundContainer>
    )
  }
}
export default RockPaperScissors
