// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {filterDetails, isActive, updateLanguage} = props
  const {id, language} = filterDetails
  //   console.log('active_tap_id', isActive)

  const filterChanged = () => {
    updateLanguage(id)
  }

  return (
    <li>
      <button
        className={`filter_button ${isActive ? 'active' : 'not_active'}`}
        type="button"
        onClick={filterChanged}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
