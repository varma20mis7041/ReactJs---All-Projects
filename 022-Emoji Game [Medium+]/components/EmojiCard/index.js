// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmojiItem} = props
  const emojiClicked = () => {
    onClickEmojiItem(emojiDetails)
  }
  const {emojiName, emojiUrl} = emojiDetails
  return (
    <li className="emoji_container" onClick={emojiClicked}>
      <button className="emoji_button" type="button">
        {' '}
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
