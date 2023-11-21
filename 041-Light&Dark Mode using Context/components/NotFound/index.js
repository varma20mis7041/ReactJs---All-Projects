// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBackgroundColorClassName = isDarkTheme
        ? 'notFound_dark_bg'
        : 'notFound_light_bg'

      const notFoundMainHeadingClassName = isDarkTheme
        ? 'notFound_dark_mode_main_heading'
        : 'notFound_light_mode_main_heading'

      const notFoundDescriptionClassName = isDarkTheme
        ? 'notFound_dark_mode_description'
        : 'notFound_light_mode_description'
      return (
        <div className="not_found_bg_container">
          <Navbar />
          <div
            className={`not_found_card_container ${notFoundBackgroundColorClassName}`}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not_found_img_element"
            />
            <h1
              className={`not_found_main_heading ${notFoundMainHeadingClassName}`}
            >
              Lost Your Way?
            </h1>
            <p
              className={`not_found_description ${notFoundDescriptionClassName}`}
            >
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
