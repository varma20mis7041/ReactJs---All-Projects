// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImgUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="link_element">
      <li className="team_card_container">
        <img src={teamImgUrl} alt={name} className="team_img_url_element" />
        <p className="team_heading">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
