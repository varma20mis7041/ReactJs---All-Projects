import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {FaSuitcase} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ul className="header_bg_container">
      <Link to="/">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="header_logo_img_url"
          />
        </li>
      </Link>
      <div className="home_jobs_logout_element_container">
        <div className="header_middle_container">
          <Link to="/" className="home_link_element">
            <li className="nav_element_for_lg">Home</li>
            <li className="nav_icon_for_sm">
              <AiFillHome size={25} />
            </li>
          </Link>
          <Link to="/jobs" className="jobs_link_element">
            <li className="nav_element_for_lg">Jobs</li>
            <li className="nav_icon_for_sm">
              <FaSuitcase size={25} />
            </li>
          </Link>
        </div>
        <button
          className="logout_button_lg_element"
          type="button"
          onClick={onClickLogout}
        >
          Logout
        </button>
        <button
          type="button"
          onClick={onClickLogout}
          className="logout_sm_button_element"
          aria-label="Logout icon"
        >
          <FiLogOut size={25} color="#ffffff" />
        </button>
      </div>
    </ul>
  )
}

export default withRouter(Header)
