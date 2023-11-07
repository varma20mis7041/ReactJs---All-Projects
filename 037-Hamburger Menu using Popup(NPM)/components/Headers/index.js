// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import './index.css'

const Header = () => (
  <div className="header_bg_container">
    <Link to="/" className="link_at_logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          aria-label="Open Menu"
          className="ham_burger_button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="ham_burger_menu_icon_img_element" />
        </button>
      }
      className="pop_up_library"
    >
      {close => (
        <div className="popup_bg_container">
          <div className="popup_close_button_container">
            <button
              type="button"
              aria-label="Close Menu"
              className="close_button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close_mark_icon" />
            </button>
          </div>
          <ul className="popup_items_container">
            <li className="menu_container">
              <AiFillHome className="menu_item_icon" />
              <Link to="/" className="link_router_component">
                <h1 className="menu_item_heading">Home</h1>
              </Link>
            </li>

            <li className="menu_container">
              <BsInfoCircleFill className="menu_item_icon" />
              <Link to="/about" className="link_router_component">
                <h1 className="menu_item_heading">About</h1>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
