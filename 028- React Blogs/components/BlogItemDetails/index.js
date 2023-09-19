// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    detailedBlogData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogIdData()
  }

  getBlogIdData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log('path_id', id)
    const fetchedData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await fetchedData.json()
    console.log(data)
    const blogItemDetails = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    console.log('blog___details:', blogItemDetails)
    this.setState({detailedBlogData: blogItemDetails, isLoading: false})
  }

  getBlogDetails = () => {
    const {detailedBlogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = detailedBlogData

    return (
      <div className="blog_item_card_bg_container">
        <h1 className="title_heading_element">{title}</h1>
        <div className="author_details_card_container">
          <img src={avatarUrl} alt={author} className="author_image_element" />
          <p className="author_heading_element">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog_img_element" />
        <p className="blog_description_element">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      this.getBlogDetails()
    )
  }
}

export default BlogItemDetails
