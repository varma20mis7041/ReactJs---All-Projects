import './index.css'

const SkillItem = props => {
  const {skillDetails} = props
  const {name} = skillDetails
  const imageUrl = skillDetails.image_url

  return (
    <li className="skill_item_container">
      <img className="skill_logo_img_element" src={imageUrl} alt={name} />
      <h1 className="skill_name">{name}</h1>
    </li>
  )
}

export default SkillItem
