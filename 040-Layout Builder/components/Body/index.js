// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const displayLeftNavbarSection = () => (
    <div className="body_section_left_container">
      <h1 className="body_section_main_heading">Left Navbar Menu</h1>
      <ul className="left_container_nav_item_list_container">
        <li className="left_nav_list_item">Item 1</li>
        <li className="left_nav_list_item">Item 2</li>
        <li className="left_nav_list_item">Item 3</li>
        <li className="left_nav_list_item">Item 3</li>
      </ul>
    </div>
  )
  const displayContentSection = () => (
    <div className="body_section_content_container">
      <h1 className="body_section_main_heading">Content</h1>
      <p className="body_section_content_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  )

  const displayRightNavbarSection = () => (
    <div className="body_section_right_Navbar_bg_container">
      <h1 className="body_section_main_heading">Right Navbar</h1>
      <div className="ad_bg_card_container">
        <div className="add_container">
          <p className="body_section_right_navbar_ad_element">Ad 1</p>
        </div>
        <div className="add_container">
          <p className="body_section_right_navbar_ad_element">Ad 2</p>
        </div>
      </div>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body_bg_container">
            {showLeftNavbar ? displayLeftNavbarSection() : null}
            {showContent ? displayContentSection() : null}
            {showRightNavbar ? displayRightNavbarSection() : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
