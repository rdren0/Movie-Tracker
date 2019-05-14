import React from 'react';
import ShowMore from 'react-show-more';
import { checkIfFavorited } from '../../Utilities/Cleaners'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieCard.scss';



 const MovieCard = (movie) => {
  let isFavorited = movie.favorited;
  isFavorited = checkIfFavorited(movie, movie.favorites)
  movie = ({...movie, favorited: isFavorited})
  const {vote_average, title, release_date, poster_path, overview, favoriteMovie, favorited, deleteFavorite, showPopup, isLoggedIn, id } = movie;
  let whichFavoriteButton;
  if(isLoggedIn === false) {
    whichFavoriteButton = <button className="movie-buttons" onClick={() => showPopup()}>Favorite</button>
  } else if(!favorited) {
    whichFavoriteButton = <button className="movie-buttons" onClick={() => favoriteMovie(movie)}>Favorite</button>
  } else {
    whichFavoriteButton = <button className="movie-buttons" onClick={() => deleteFavorite(movie)}>Delete Favorite</button>
  }
  let imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  let divStyle = {
    backgroundImage: 'url(' + imgUrl + ')'
  }
  return (
      <div className='movie-card' >
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <div className='movie-overview'>
        <h4 className='movie-title'>{title}</h4>
          {whichFavoriteButton}
          <Link to={`movies/${id}`}><button className="movie-buttons" > See more </button></Link>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

// const ImageCard = ({ name, bio, image, id, type }) => {

//   return (
//       <Link to={`movies/${id}`}>
//         <img src={image} className='app-img' />
//       </Link>
//   )
// }
// <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt='img poster' className='movie-poster'/>


export default connect(mapStateToProps)(MovieCard);
