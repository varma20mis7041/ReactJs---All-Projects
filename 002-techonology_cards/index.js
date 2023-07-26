// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} listItem`}>
      <h1 className="title_heading">{title}</h1>
      <p className="title_description">{description}</p>
      <div className="img_container">
        <img src={imgUrl} alt={title} className="img" />
      </div>
    </li>
  )
}

export default CardItem
