import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  GradientGeneratorCardContainer,
  HeadingText,
  UnorderedList,
  GradientColorContainer,
  ColorInputCustomParagraphElement,
  ColorInputElement,
  CostumeGenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
    generatedFirstColor: '#8ae323',
    generatedSecondColor: '#014f7b',
    generatedGradientDirection: gradientDirectionsList[0].value,
  }

  onChangeFirstColorInput = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColorInput = event => {
    this.setState({secondColor: event.target.value})
  }

  onChangeGradientDirection = id => {
    const activeDirectionTabDetails = gradientDirectionsList.filter(
      eachDirectionItem => eachDirectionItem.directionId === id,
    )
    console.log('selectedDirection', activeDirectionTabDetails[0].value)
    this.setState({gradientDirection: activeDirectionTabDetails[0].value})
  }

  onClickGenerateButton = () => {
    const {firstColor, secondColor, gradientDirection} = this.state
    this.setState({
      generatedFirstColor: firstColor,
      generatedSecondColor: secondColor,
      generatedGradientDirection: gradientDirection,
    })
  }

  render() {
    const {
      firstColor,
      secondColor,
      gradientDirection,
      generatedFirstColor,
      generatedSecondColor,
      generatedGradientDirection,
    } = this.state
    return (
      <GradientGeneratorContainer
        generatedFirstColor={generatedFirstColor}
        generatedSecondColor={generatedSecondColor}
        gradientDirection={generatedGradientDirection}
        data-testid="gradientGenerator"
      >
        <GradientGeneratorCardContainer>
          <HeadingText heading>Generate a CSS Color Gradient</HeadingText>
          <HeadingText as="p">Choose Direction</HeadingText>
          <UnorderedList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                onChangeGradientDirection={this.onChangeGradientDirection}
                activeTabId={eachDirection.value === gradientDirection}
              />
            ))}
          </UnorderedList>
          <HeadingText as="p">Pick the Colors</HeadingText>
          <GradientColorContainer bgContainer>
            <GradientColorContainer>
              <ColorInputCustomParagraphElement>
                {firstColor}
              </ColorInputCustomParagraphElement>
              <ColorInputElement
                type="color"
                value={firstColor}
                onChange={this.onChangeFirstColorInput}
              />
            </GradientColorContainer>
            <GradientColorContainer>
              <ColorInputCustomParagraphElement>
                {secondColor}
              </ColorInputCustomParagraphElement>
              <ColorInputElement
                type="color"
                value={secondColor}
                onChange={this.onChangeSecondColorInput}
              />
            </GradientColorContainer>
          </GradientColorContainer>
          <CostumeGenerateButton
            type="button"
            onClick={this.onClickGenerateButton}
          >
            Generate
          </CostumeGenerateButton>
        </GradientGeneratorCardContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
