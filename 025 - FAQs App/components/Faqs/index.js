// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  state = {displayIdList: []}
  //   constructor(props) {
  //     super(props)
  //     this.state = {displayIdList: []}
  //   }

  onClikeShowButton = id => {
    this.setState(prevState => ({
      displayIdList: [...prevState.displayIdList, id],
    }))
  }

  onClickHideButton = id => {
    const {displayIdList} = this.state
    const updatedDisplayIdList = displayIdList.filter(
      eachDisplayId => eachDisplayId !== id,
    )
    this.setState({displayIdList: updatedDisplayIdList})

    console.log('updated_list', updatedDisplayIdList)
  }

  render() {
    const {displayIdList} = this.state
    const {faqsList} = this.props
    console.log('displayList', displayIdList)
    return (
      <div className="faq_bg_container">
        <ul className="faq_list_card_container">
          <h1 className="faqs_heading">FAQs</h1>
          {faqsList.map(eachFaq => (
            <FaqItem
              faqDetails={eachFaq}
              key={eachFaq.id}
              onClikeShowButton={this.onClikeShowButton}
              onClickHideButton={this.onClickHideButton}
              display={displayIdList.includes(eachFaq.id)}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Faqs
