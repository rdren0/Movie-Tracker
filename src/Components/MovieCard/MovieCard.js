import React from 'react';
import ShowMore from 'react-show-more';
import { checkIfFavorited } from '../../Utilities/Cleaners'
import { connect } from 'react-redux';


 const MovieCard = (movie) => {
  console.log(movie)
  let isFavorited = movie.favorited;
  isFavorited = checkIfFavorited(movie, movie.favorites)
  movie = ({...movie, favorited: isFavorited})

  const {vote_average, title, release_date, poster_path, overview, favoriteMovie, favorited, deleteFavorite, showPopup, isLoggedIn } = movie;
  let whichFavoriteButton;
  if(isLoggedIn === false) {
    whichFavoriteButton = <button onClick={() => showPopup()}>Favorite</button>
  } else if(!favorited) {
    whichFavoriteButton = <button onClick={() => favoriteMovie(movie)}>Favorite</button>
  } else {
    whichFavoriteButton = <button onClick={() => deleteFavorite(movie)}>Delete Favorite</button>
  }
  return (
      <div className='movie-card'>
        <div className='movie-title'>
          <p>{vote_average}</p> 
          <h4>{title}</h4>
          <p>{release_date}</p>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='img poster' className='movie-poster'/>
        <div className='movie-overview'>
          <ShowMore lines={6}>{overview}</ShowMore>
          {whichFavoriteButton}
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})


export default connect(mapStateToProps)(MovieCard);
