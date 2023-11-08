// Write your code here

import MoviesSlider from '../MoviesSlider/index'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovieItem => eachMovieItem.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovieItem => eachMovieItem.categoryId === 'COMEDY',
  )

  console.log('action_movies_list', actionMovies)
  console.log('comedy_movies_list', comedyMovies)
  return (
    <div className="prime_video_bg_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime_video_img_element"
      />
      <div className="movie_container">
        <h1 className="action_movies_main_heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} comedyMovies={comedyMovies} />
        <h1 className="comedy_movie_main_heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
