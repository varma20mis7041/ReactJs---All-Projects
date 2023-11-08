// Write your code here
import './index.css'

import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="movie_thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="popup_card_container">
            <button
              type="button"
              className="close_button"
              aria-label="Close Button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie_player_container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
