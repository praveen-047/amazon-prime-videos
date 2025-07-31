// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')

  return (
    <div className="main-container">
      <div className="banner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-image"
        />
      </div>
      <div className="movies-main-container">
        <h1 className="movies-heading">Action Movies</h1>
        <div className="movies-container">
          <MoviesSlider details={actionMovies} />
        </div>
      </div>
      <div className="movies-main-container">
        <h1 className="movies-heading">Comedy Movies</h1>
        <div className="movies-container">
          <MoviesSlider details={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
