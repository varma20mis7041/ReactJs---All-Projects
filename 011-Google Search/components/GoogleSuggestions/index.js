// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  onClickArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filteredSearchList = suggestionsList.filter(eachSearchItem =>
      eachSearchItem.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg_container">
        <div>
          <div className="img_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="google_img"
            />
          </div>

          <ul className="suggestion_list_container">
            <li>
              <div className="search_box_container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                  className="search_icon_img"
                />
                <input
                  type="search"
                  placeholder="Search Google"
                  className="search_input_element"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                />
              </div>
            </li>
            {filteredSearchList.map(eachList => (
              <SuggestionItem
                suggestionsListDetails={eachList}
                key={eachList.id}
                onClickArrow={this.onClickArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
