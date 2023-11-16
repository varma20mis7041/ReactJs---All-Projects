import './index.css'

const NotFound = () => (
  <div className="not_found_bg_container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      className="page_not_found_img"
    />
    <h1 className="page_not_found_heading_element">Page Not Found</h1>
    <p className="page_not_found_description">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
