// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem/index'
import './index.css'

class BLogList extends Component {
  state = {
    blogList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const responseData = await fetch('https://apis.ccbp.in/blogs')
    const data = await responseData.json()
    console.log(data)
    const fetchedBlogList = data.map(eachDataItem => {
      const updateDataItem = {
        id: eachDataItem.id,
        title: eachDataItem.title,
        imageUrl: eachDataItem.image_url,
        avatarUrl: eachDataItem.avatar_url,
        author: eachDataItem.author,
        topic: eachDataItem.topic,
      }
      return updateDataItem
    })
    console.log('updated_data', fetchedBlogList)
    this.setState({blogList: fetchedBlogList, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    console.log('blogList_in_render_function', blogList)
    return (
      <ul className="blog_list_bg_container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              type="TailSpin"
              color="#00bfff"
              height={50}
              width={50}
              className="loader_element"
            />
          </div>
        ) : (
          blogList.map(eachBlogItem => (
            <BlogItem blogListDetails={eachBlogItem} key={eachBlogItem.id} />
          ))
        )}
      </ul>
    )
  }
}

export default BLogList
