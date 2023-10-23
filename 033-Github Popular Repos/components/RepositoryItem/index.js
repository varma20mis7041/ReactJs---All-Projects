// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryItemDetails} = props
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = repositoryItemDetails

  return (
    <li className="repository_item_card_container">
      <div className="repository_top_section_up_to_main_heading">
        <img src={avatarUrl} alt={name} className="repository_img_element" />
        <h1 className="repository_heading_element">{name}</h1>
      </div>
      <div className="repo_item_each_detail_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="repo_item_detailed_item_img_element"
        />
        <p className="repo_item_detail_element">{`${starsCount} start`}</p>
      </div>
      <div className="repo_item_each_detail_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="repo_item_detailed_item_img_element"
        />
        <p className="repo_item_detail_element">{`${forksCount} forks`}</p>
      </div>
      <div className="repo_item_each_detail_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="repo_item_detailed_item_img_element"
        />
        <p className="repo_item_detail_element">{`${issuesCount} open issues`}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
