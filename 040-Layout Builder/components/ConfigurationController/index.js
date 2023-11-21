// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="controller_bg_container">
          <h1 className="layout_main_heading">Layout</h1>
          <div className="controller_checkbox_container">
            <div className="check_box_container">
              <input
                type="checkbox"
                id="leftNavbarCheckbox"
                checked={showLeftNavbar}
                onClick={onToggleShowLeftNavbar}
              />
              <label
                htmlFor="leftNavbarCheckbox"
                className="check_box_label_element"
              >
                Left Navbar
              </label>
            </div>
            <div className="check_box_container">
              <input
                type="checkbox"
                checked={showContent}
                id="contentCheckbox"
                onClick={onToggleShowContent}
              />
              <label
                htmlFor="contentCheckbox"
                className="check_box_label_element"
              >
                Content
              </label>
            </div>
            <div className="check_box_container">
              <input
                type="checkbox"
                id="rightNavbarCheckbox"
                checked={showRightNavbar}
                onClick={onToggleShowRightNavbar}
              />
              <label
                htmlFor="rightNavbarCheckbox"
                className="check_box_label_element"
              >
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
