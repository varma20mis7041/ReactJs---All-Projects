// Write your code here
import './index.css'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="planets_bg_container" data-testid="planets">
      <h1 className="planet_item_main_heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem planetDetails={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
