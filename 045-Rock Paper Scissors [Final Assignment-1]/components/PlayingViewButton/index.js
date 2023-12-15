import {
  CustomImageElementInPlayingView,
  CustomPlayingViewButton,
} from './StyledComponents'

const PlayingViewButton = props => {
  const {buttonDetails, onClickUpdateUserOption} = props
  // console.log('button_details:', buttonDetails)
  const {imageUrl, id} = buttonDetails
  let testIdValue = ''
  if (id === 'ROCK') {
    testIdValue = 'rockButton'
  } else if (id === 'SCISSORS') {
    testIdValue = 'scissorsButton'
  } else {
    testIdValue = 'paperButton'
  }

  const onClickOption = () => onClickUpdateUserOption(id)
  return (
    <CustomPlayingViewButton
      className="rps_playing_view_button"
      type="button"
      onClick={onClickOption}
      data-testid={testIdValue}
    >
      <CustomImageElementInPlayingView src={imageUrl} alt={id} />
    </CustomPlayingViewButton>
  )
}
export default PlayingViewButton
