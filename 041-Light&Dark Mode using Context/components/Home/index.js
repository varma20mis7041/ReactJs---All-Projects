// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBackgroundColorClassName = isDarkTheme
        ? 'home_dark_bg'
        : 'home_light_bg'

      const homeImgSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeMainHeading = isDarkTheme
        ? 'home_dark_mode_main_heading'
        : 'home_light_mode_main_heading'
      return (
        <div className="home_bg_container">
          <Navbar />
          <div
            className={`home_card_container  ${homeBackgroundColorClassName}`}
          >
            <img src={homeImgSrc} className="home_img_element" alt="home" />
            <h1 className={`home_main_heading ${homeMainHeading}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
