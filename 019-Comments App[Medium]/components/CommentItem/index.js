import './index.css'

const CommentItem = props => {
  const {commentDetails, onClickCommentLiked, onClickDeleteComment} = props
  const {id, name, comment, time, isLiked, bgColor} = commentDetails

  const likeClassName = isLiked ? 'liked' : ''

  const likedImgUrl =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const unLikedImgUrl =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const imgClassName = isLiked ? likedImgUrl : unLikedImgUrl

  const likeButtonClicked = () => {
    console.log(id)
    onClickCommentLiked(id)
  }

  const deleteCommentClicked = () => {
    onClickDeleteComment(id)
  }
  console.log('in comment item', bgColor)

  const initial = name[0].toUpperCase()

  return (
    <li className="comment_container">
      <div className="comment_details_card_container">
        <div className="initial_img_container">
          <p className={`name_img ${bgColor}`}>{initial}</p>
        </div>
        <div className="comment_details_container">
          <div className="comment_details_top_section">
            <h1 className="commenter_name">{name}</h1>
            <p className="time_duration_element">{time}</p>
          </div>
          <p className="comment_element">{comment}</p>
        </div>
      </div>
      <div className="comment_bottom_section_container">
        <div className="like_container">
          <img
            src={imgClassName}
            className={`like_img ${likeClassName}`}
            alt="like"
          />
          <button
            type="button"
            className={`like_text_element ${likeClassName}`}
            data-testid="like"
            onClick={likeButtonClicked}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete_button"
          data-testid="delete"
          onClick={deleteCommentClicked}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete_img"
            alt="delete_img"
          />
        </button>
      </div>
      <hr className="horizontal_line_element" />
    </li>
  )
}
export default CommentItem
