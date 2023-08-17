import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemDetails
  const deleteButtonClicked = () => {
    onDelete(id)
  }
  return (
    <li className="history_item_container">
      <div className="history_item_top_container">
        <p className="time_accessed_text">{timeAccessed}</p>
        <div className="history_item_middle_container">
          <img alt="domain logo" src={logoUrl} className="domain_logo" />
          <div className="history_item_title_and_domain_url_container">
            <p className="title_heading">{title}</p>
            <p className="domain_url_text">{domainUrl}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="delete_button"
        data-testid="delete"
        onClick={deleteButtonClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete_icon"
          alt="delete_icon_img"
        />
      </button>
    </li>
  )
}

export default HistoryItem
