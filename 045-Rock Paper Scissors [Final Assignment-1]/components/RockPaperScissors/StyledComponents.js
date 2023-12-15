import styled from 'styled-components'

export const RPSBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 50px 50px;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    padding: 10px 10px;
  }
`
export const ScoreCardBgContainer = styled.div`
  width: 80vw;
  border: 4px solid #ffffff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 90vw;
    padding: 10px;
    border-width: 2px;
  }
`
export const HeadingText = styled.h1`
  font-size: ${props => (props.result ? '60px' : '22px')};
  font-family: ${props => (props.gameResult ? 'Roboto' : 'Bree Serif')};
  font-weight: ${props => (props.result ? '900' : '500')};
  color: ${props => (props.score ? '#223a5f' : '#ffffff')};
  margin: ${props => (props.result ? '0px' : '10px')};
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: #ffffff;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    width: 120px;
  }
`

export const PlayingViewBackgroundContainer = styled.div`
  margin-top: 50px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PlayingViewButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
`

export const GameResultsView = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const UserAndOpponentSelectedOptionViewContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const SelectedOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const CustomImageElementInGameResultsView = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (max-width: 768px) {
    height: 170px;
    width: 170px;
  }
`
export const GameViewResultText = styled.p`
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #ffffff;
`
export const CustomPlayAgainButton = styled.button`
  color: #223a5f;
  font-family: Bree Serif;
  font-weight: 500;
  font-size: 20px;
  height: 55px;
  width: 200px;
  border-width: 0px;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;
  //   @media screen and (max-width:768px){
  //       height:45px;
  //       width
  //   }
`
export const RulesButtonBgContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: flex-end;
`
