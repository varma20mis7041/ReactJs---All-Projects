import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onClickDeleteButton} = props
  const {
    id,
    websiteName,
    userName,
    password,
    showPassword,
    bgColor,
  } = passwordDetails

  const showOrHidePassword = () => {
    if (showPassword === false) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="password_stars_img"
          className="password_in_stars_img_element"
        />
      )
    }
    return <p className="password_text_element">{password}</p>
  }

  const deleteButtonClicked = () => {
    onClickDeleteButton(id)
  }

  return (
    <li className="password_details_bg_container">
      <div className="password_details_container">
        <div className="user_logo_container">
          <p className={`initial_element ${bgColor} `}>
            {websiteName[0].toUpperCase()}
          </p>
        </div>
        <div className="password_details">
          <p className="website_name_element">{websiteName}</p>
          <p className="user_name_element">{userName}</p>

          {showOrHidePassword()}
        </div>
      </div>
      <div className="delete_button_container">
        <button
          type="button"
          className="delete_button_element"
          data-testid="delete"
          onClick={deleteButtonClicked}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete_img_element"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
