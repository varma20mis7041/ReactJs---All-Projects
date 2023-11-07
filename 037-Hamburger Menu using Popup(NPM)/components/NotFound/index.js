// Write your code here

import './index.css'

const NotFound = () => (
  <div className="not_found_bg_container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="not_found_img_element"
    />
    <h1 className="not_found_main_heading">Lost Your Way?</h1>
    <p className="not_found_description">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
