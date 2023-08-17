// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app_details_container">
      <img src={imageUrl} alt={appName} className="app_image_element" />
      <p className="app_name_element">{appName}</p>
    </li>
  )
}

export default AppItem
