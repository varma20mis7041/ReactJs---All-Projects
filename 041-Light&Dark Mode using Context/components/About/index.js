// Write your code here
import './index.css'
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBackgroundColorClassName = isDarkTheme
        ? 'about_dark_bg'
        : 'about_light_bg'

      const aboutImgSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutMainHeadingClassName = isDarkTheme
        ? 'about_dark_mode_main_heading'
        : 'about_light_mode_main_heading'
      return (
        <div className="about_bg_container">
          <Navbar />
          <div
            className={`about_card_container ${aboutBackgroundColorClassName}`}
          >
            <img src={aboutImgSrc} alt="about" className="about_img_element" />
            <h1
              className={`about_main_heading_element ${aboutMainHeadingClassName}`}
            >
              About
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
