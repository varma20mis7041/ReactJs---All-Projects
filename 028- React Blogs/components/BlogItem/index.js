// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogListDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogListDetails

  return (
    <Link to={`/blogs/${id}`} className="blog_item_link_element">
      <li className="blog_item_card_container">
        <div>
          <img src={imageUrl} alt={title} className="title_img_element" />
        </div>
        <div className="blog_details_card">
          <p className="topic_element">{topic}</p>
          <h1 className="title_element">{title}</h1>
          <div className="author_card_container">
            <img src={avatarUrl} alt="avatar" className="avatar_img_element" />
            <p className="aurthor_element">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
