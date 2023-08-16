// Write your code here

import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {id, name, imgUrl} = destinationDetails
    return (
      <li className="each_destination_place_card_container">
        <img src={imgUrl} className="destination_img" alt={name} />
        <p className="destination_heading">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
