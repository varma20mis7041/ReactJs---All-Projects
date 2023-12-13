// Write your code here
import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {
    gradientDirectionDetails,
    onChangeGradientDirection,
    activeTabId,
  } = props
  const {directionId, displayText} = gradientDirectionDetails
  const onClickTabItem = () => {
    console.log(directionId)
    onChangeGradientDirection(directionId)
  }
  return (
    <li>
      <CustomButton onClick={onClickTabItem} active={activeTabId}>
        {displayText}
      </CustomButton>
    </li>
  )
}
export default GradientDirectionItem
