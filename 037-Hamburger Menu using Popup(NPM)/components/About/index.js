// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about_bg_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about_lg_img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about_sm_img"
      />
    </div>
  </>
)

export default About
