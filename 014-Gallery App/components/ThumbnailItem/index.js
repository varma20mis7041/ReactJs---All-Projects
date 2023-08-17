// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageListDetails, onClickChangeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageListDetails
  const thumbnailClicked = () => {
    onClickChangeImage(id)
  }
  const blurEffectClassName = isActive ? '' : 'blur_effect'
  return (
    <div>
      <button type="button" className="image_button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail_img ${blurEffectClassName}`}
          onClick={thumbnailClicked}
        />
      </button>
    </div>
  )
}

export default ThumbnailItem
