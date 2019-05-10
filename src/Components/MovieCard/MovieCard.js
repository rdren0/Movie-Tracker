import React from 'react';
import ShowMore from 'react-show-more';


 const MovieCard = (movie) => {

  
  const {vote_average, title, id, release_date, poster_path, overview, favoriteMovie } = movie;
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
          <button onClick={() => favoriteMovie(movie)}>Favorite</button>
        </div>
      </div>
    );
}

export default MovieCard;
