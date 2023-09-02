import './index.css'

const MatchImageItem = props => {
  const {thumbnailDetails, onClickMatchImage} = props
  const {id, thumbnailUrl} = thumbnailDetails
  const imageClicked = () => {
    onClickMatchImage(id)
  }
  return (
    <li className="thumbnail_img_element_container">
      <button type="button" className="image_button_element">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="match_img_element"
          onClick={imageClicked}
        />
      </button>
    </li>
  )
}
export default MatchImageItem
