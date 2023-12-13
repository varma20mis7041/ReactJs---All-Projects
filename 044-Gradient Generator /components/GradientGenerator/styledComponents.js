// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to ${props => props.gradientDirection},
    ${props => props.generatedFirstColor},
    ${props => props.generatedSecondColor}
  );
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GradientGeneratorCardContainer = styled.div`
  height: 75vh;
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #ededed;
  @media screen and (max-width: 768px) {
    width: 85vw;
    height: 85vh;
  }
`

export const HeadingText = styled.h1`
  color: #ededed;
  font-weight: ${props => (props.heading ? '600' : '500')};
  font-family: 'Roboto';
  font-size: ${props => (props.heading ? '30px' : '26px')};
  text-align: center;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const GradientColorContainer = styled.div`
  display: flex;
  justify-content: ${props =>
    props.bgContainer ? ' space-around' : 'space-between'};
  flex-direction: ${props => (props.bgContainer ? 'row' : 'column')};
  align-items: center;
  width: ${props => (props.bgContainer ? '60%' : '100%')};
  height: 100px;
`
export const ColorInputCustomParagraphElement = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const ColorInputElement = styled.input`
  height: 40px;
  width: 80px;
  padding: 0px;
`

export const CostumeGenerateButton = styled.button`
  height: 40px;
  width: 100px;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  background-color: blue;
`
