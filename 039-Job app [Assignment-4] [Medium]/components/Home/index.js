import {Link} from 'react-router-dom'

import Header from '../Header/index'

import './index.css'

const Home = () => (
  <div className="home_bg_container">
    <Header />
    <div className="home_details_container">
      <h1 className="home_main_heading">Find The Job That Fits Your Life</h1>
      <p className="home_page_description">
        Millions of people are searching for jobs,salary information,company
        reviews.Find the job that fits your abilities and potential.
      </p>

      <Link to="/jobs">
        <button type="button" className="find_jobs_button">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default Home
