import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home_bg_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home_lg_img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home_sm_img"
      />
    </div>
  </>
)

export default Home
