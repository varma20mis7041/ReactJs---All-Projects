// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planet_item_bg_container">
      <img
        src={imageUrl}
        alt={`planet ${name}`}
        className="planet_img_element"
      />
      <h1 className="planet_name_element">{name}</h1>
      <p className="planet_description">{description}</p>
    </div>
  )
}

export default PlanetItem
