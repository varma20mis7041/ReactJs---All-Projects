import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem/index'

class HistoryPage extends Component {
  state = {
    searchInput: '',
    deleteListid: [],
  }

  onClickSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistoryItem = nextId => {
    const {deleteListid} = this.state
    const newDeleteListIds = deleteListid.concat(nextId)
    console.log(newDeleteListIds)
    this.setState({deleteListid: newDeleteListIds})
  }

  render() {
    const {initialHistoryList} = this.props
    const {deleteListid} = this.state

    const {searchInput} = this.state
    const filteredHistoryList = initialHistoryList.filter(eachListItem =>
      eachListItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const remainingHistoryList = filteredHistoryList.filter(eachListItem => {
      if (deleteListid.includes(eachListItem.id)) {
        return false
      }
      return true
    })
    let bottomDisplay = (
      <ul className="history_page_items_container">
        {remainingHistoryList.map(eachItem => (
          <HistoryItem
            historyItemDetails={eachItem}
            key={eachItem.id}
            onDelete={this.onDeleteHistoryItem}
          />
        ))}
      </ul>
    )
    if (remainingHistoryList.length === 0) {
      bottomDisplay = (
        <p className="no_history_element">There is no history to show</p>
      )
    }
    return (
      <div className="history_page_background_container">
        <div className="history_page_top_section">
          <div className="logo_img_container">
            <img
              className="history_icon_element"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="search_box_container">
            <div className="search_img_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search_img"
                className="search_img"
              />
            </div>

            <input
              type="search"
              className="search_input_element"
              placeholder="Search Here!"
              onChange={this.onClickSearchInput}
            />
          </div>
        </div>
        {bottomDisplay}
      </div>
    )
  }
}

export default HistoryPage
