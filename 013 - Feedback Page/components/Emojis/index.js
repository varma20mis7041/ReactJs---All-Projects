import './index.css'

const Emojis = props => {
  const {emojisDetails, onClickedEmoji} = props
  const {name, imageUrl} = emojisDetails
  const emogiClicked = () => {
    onClickedEmoji()
  }
  return (
    <li className="emoji_container">
      <img
        src={imageUrl}
        alt={name}
        className="emoji_image"
        onClick={emogiClicked}
      />
      <p className="emoji_name">{name}</p>
    </li>
  )
}

export default Emojis
