// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => toggleTheme()

      const websitelogoSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const headingColorClassName = isDarkTheme ? 'white_color' : 'black_color'

      const themeChangeImgSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const backgroundColorClassName = isDarkTheme ? 'brown_bg' : 'white_bg'
      return (
        <ul className={`navbar_items_bg_container ${backgroundColorClassName}`}>
          <li>
            <img
              src={websitelogoSrc}
              alt="website logo"
              className="nav_img_element"
            />
          </li>
          <li>
            <div className="nav_item_home_and_about_container">
              <Link
                to="/"
                className={`nav_item_link_element nav_item_heading_element ${headingColorClassName}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav_item_link_element nav_item_heading_element ${headingColorClassName}`}
              >
                About
              </Link>
            </div>
          </li>
          <li>
            <button
              type="button"
              className="theme_change_button_element"
              data-testid="theme"
              onClick={onToggleTheme}
            >
              <img
                src={themeChangeImgSrc}
                alt="theme"
                className="nav_img_element"
              />
            </button>
          </li>
        </ul>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
