// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {details} = props
  const settings = {dots: false, slidesToShow: 4, slidesToScroll: 1}

  return (
    <Slider {...settings}>
      {details.map(each => (
        <MovieItem details={each} key={each.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
