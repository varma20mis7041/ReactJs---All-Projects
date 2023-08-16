// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filteredDestinationList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        <div className="bg_container">
          <div className="destination_home_page_top_container">
            <h1 className="destination_search_heading">Destination Search</h1>
            <div className="search_input_container">
              <input
                type="search"
                placeholder="Search"
                className="search_input_element"
                onChange={this.onChangeSearchInput}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon"
                className="search_img"
              />
            </div>
          </div>
          <ul className="destination_search_card_container">
            {filteredDestinationList.map(eachItem => (
              <DestinationItem
                destinationDetails={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>

        <div className="last-container">
          <p>
            Developed by @Bhargav varma | Developed date : 30 jul 2023 | contact
            : bhargav.coding@gmail.com{' '}
          </p>
        </div>
      </>
    )
  }
}
export default DestinationSearch
