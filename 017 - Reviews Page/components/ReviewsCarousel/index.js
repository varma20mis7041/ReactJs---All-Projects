// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCard extends Component {
  state = {currentId: 0}

  rightArrowClicked = () => {
    const {currentId} = this.state
    if (currentId <= 2) {
      this.setState(prevState => ({currentId: prevState.currentId + 1}))
    }
  }

  leftArrowClicked = () => {
    const {currentId} = this.state
    if (currentId >= 1) {
      this.setState(prevState => ({currentId: prevState.currentId - 1}))
    }
  }

  render() {
    const {currentId} = this.state
    const {reviewsList} = this.props
    const currentReviewList = reviewsList[currentId]
    const {imgUrl, username, companyName, description} = currentReviewList
    return (
      <div className="review_page_background_container">
        <div className="review_card_container">
          <button
            type="button"
            className="button"
            onClick={this.leftArrowClicked}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          <div className="review_details_container">
            <h1 className="reviews_main_heading">Reviews</h1>
            <img src={imgUrl} alt={username} />
            <p className="user_name">{username}</p>
            <p className="company_name">{companyName}</p>
            <p className="review">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.rightArrowClicked}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCard
