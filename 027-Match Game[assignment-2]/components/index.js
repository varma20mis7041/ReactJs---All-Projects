import './index.css'

const CategoryCard = props => {
  const {categoryDetails, isTabActive, onClickChangeTab} = props
  const {tabId, displayText} = categoryDetails

  const tabClicked = () => {
    onClickChangeTab(tabId)
  }
  return (
    <li
      className={`tab_button_container ${isTabActive && 'active_tap_styles'}`}
    >
      <button type="button" className="tab_button" onClick={tabClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default CategoryCard
