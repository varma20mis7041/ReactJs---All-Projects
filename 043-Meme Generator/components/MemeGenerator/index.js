import {Component} from 'react'

import {
  MemeGeneratorBgContainer,
  MainHeading,
  LabelContainer,
  LabelElement,
  InputElement,
  CustomButton,
  MemeContainer,
  MemeText,
  CustomOption,
  SampleUrl,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    bgImageUrl: '',
    topText: '',
    bottomText: '',
    showMeme: false,
    activeFontSize: fontSizesOptionsList[0].optionId,
  }

  onChangeImageUrlInput = event => {
    this.setState({showMeme: false, bgImageUrl: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    console.log('font-sizeee', event.target.value)
    this.setState({activeFontSize: event.target.value})
  }

  onClickGenerateButton = event => {
    event.preventDefault()
    const {bgImageUrl, topText, bottomText} = this.state
    if (bgImageUrl !== '' && topText !== '' && bottomText !== '') {
      this.setState({showMeme: true})
    } else {
      this.setState({showMeme: false})
    }
  }

  renderShowMemeContainer = () => {
    const {bgImageUrl, topText, bottomText, activeFontSize} = this.state

    return (
      <MemeContainer imageUrl={bgImageUrl} data-testid="meme">
        <MemeText fontSize={activeFontSize}>{topText}</MemeText>
        <MemeText fontSize={activeFontSize}>{bottomText}</MemeText>
      </MemeContainer>
    )
  }

  render() {
    const {
      showMeme,
      topText,
      bottomText,
      bgImageUrl,
      activeFontSize,
    } = this.state
    return (
      <MemeGeneratorBgContainer as="div">
        <form onSubmit={this.onClickGenerateButton}>
          <MainHeading>Meme Generator</MainHeading>
          <LabelContainer>
            <LabelElement htmlFor="imageUrl">Image URL</LabelElement>
            <InputElement
              type="text"
              id="imageUrl"
              value={bgImageUrl}
              onChange={this.onChangeImageUrlInput}
            />
            <SampleUrl>
              Sample url :
              https://assets.ccbp.in/frontend/react-js/nature-img.png
            </SampleUrl>
          </LabelContainer>

          <LabelContainer>
            <LabelElement htmlFor="topText">Top Text</LabelElement>
            <InputElement
              type="text"
              id="topText"
              value={topText}
              onChange={this.onChangeTopTextInput}
            />
          </LabelContainer>
          <LabelContainer>
            <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
            <InputElement
              type="text"
              id="bottomText"
              value={bottomText}
              onChange={this.onChangeBottomTextInput}
            />
          </LabelContainer>
          <LabelContainer>
            <LabelElement htmlFor="fontsize">Font Size</LabelElement>
            <InputElement
              id="fontsize"
              as="select"
              onChange={this.onChangeFontSize}
              value={activeFontSize}
            >
              {fontSizesOptionsList.map(eachFontOption => (
                <CustomOption
                  value={eachFontOption.optionId}
                  key={eachFontOption.optionId}
                >
                  {eachFontOption.displayText}
                </CustomOption>
              ))}
            </InputElement>
          </LabelContainer>

          <CustomButton type="submit">Generate</CustomButton>
        </form>
        {showMeme ? this.renderShowMemeContainer() : null}
      </MemeGeneratorBgContainer>
    )
  }
}
export default MemeGenerator
