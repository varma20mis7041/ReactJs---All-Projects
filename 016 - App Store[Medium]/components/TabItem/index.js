// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickChangeTab, isTabActive} = props
  const {tabId, displayText} = tabDetails
  const selectedStateStyle = isTabActive ? 'selected_tab' : ''
  const tabChanged = () => {
    onClickChangeTab(tabId)
  }
  return (
    <li>
      <button
        className={`tab_button ${selectedStateStyle}`}
        type="button"
        onClick={tabChanged}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
