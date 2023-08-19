import {Component} from 'react'
import './index.css'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

let bgClassNameIndex = 0

class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    commentInput: '',
  }

  nameInputChange = event => {
    this.setState({nameInput: event.target.value})
  }

  commentAreaInputChange = event => {
    this.setState({commentInput: event.target.value})
  }

  addComment = () => {
    const {nameInput, commentInput} = this.state

    if (bgClassNameIndex === 7) {
      bgClassNameIndex = 0
    }

    const bgColor = initialContainerBackgroundClassNames[bgClassNameIndex]

    console.log('comments', bgColor)

    bgClassNameIndex += 1

    if (nameInput !== '' && commentInput !== '') {
      const newComment = {
        id: uuidv4(),
        name: nameInput,
        comment: commentInput,
        time: formatDistanceToNow(new Date()),
        isLiked: false,
        bgColor,
      }
      this.setState(prevstate => ({
        commentsList: prevstate.commentsList.concat(newComment),
        nameInput: '',
        commentInput: '',
      }))
    } else {
      alert('Please enter you name and comment')
    }
  }

  onClickCommentLiked = id => {
    this.setState(prevstate => ({
      commentsList: prevstate.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onClickDeleteComment = id => {
    this.setState(prevstate => ({
      commentsList: prevstate.commentsList.filter(eachComment => {
        if (eachComment.id === id) {
          return false
        }
        return true
      }),
    }))
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state
    console.log(commentsList)
    const count = commentsList.length

    return (
      <div className="comments_page_container">
        <div className="add_comment_card_container">
          <h1 className="comments_heading">Comments</h1>
          <div className="add_comment_section_container">
            <div className="img_container_md">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="md_img_element"
              />
            </div>
            <form className="add_comment_details_container">
              <p className="topic">
                Say something about my projects uploaded in github
              </p>
              <input
                placeholder="Your Name"
                className="name_input_element"
                onChange={this.nameInputChange}
                value={nameInput}
              />
              <textarea
                rows="8"
                placeholder="Your Comment"
                className="text_area_element"
                onChange={this.commentAreaInputChange}
                value={commentInput}
              />
              <button
                className="add_comment_button"
                type="button"
                onClick={this.addComment}
              >
                Add Comment
              </button>
            </form>
            <div className="img_container_lg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
          </div>
        </div>
        <hr className="horizontal_line_element" />
        <p className="comments_count">
          <span className="count">{count}</span> Comments
        </p>
        <ul className="ul_element">
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              onClickCommentLiked={this.onClickCommentLiked}
              onClickDeleteComment={this.onClickDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
