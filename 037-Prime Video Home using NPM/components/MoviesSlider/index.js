// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem/index'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="action_movies_container">
      <Slider {...settings}>
        {moviesList.map(eachActionMovie => (
          <MovieItem movieDetails={eachActionMovie} key={eachActionMovie.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
