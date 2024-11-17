import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="movie col-12 col-sm-6 col-lg-2 mb-3 d-flex flex-column">
      <img className="movie-card-image" alt={title} src={posterPath} />
      <div className="movie-details">
        <h1 className="movie-title">{title}</h1>
        <p className="movie-rating">Rating: {voteAverage}</p>
        <Link to={`/movie/${id}`} className="align-self-center">
          <button className="view-details" type="button">
            View Details
          </button>
        </Link>
      </div>
    </li>
  )
}

export default MovieCard
