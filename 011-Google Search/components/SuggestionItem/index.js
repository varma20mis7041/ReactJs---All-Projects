// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsListDetails, onClickArrow} = props
  const {suggestion} = suggestionsListDetails

  const onArrowClicked = () => {
    onClickArrow(suggestion)
  }
  return (
    <li className="suggestion_item_container">
      <p className="suggestion_text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow_img"
        className="arrow_icon_image_element"
        onClick={onArrowClicked}
      />
    </li>
  )
}
export default SuggestionItem
