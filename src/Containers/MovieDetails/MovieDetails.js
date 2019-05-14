import React from "react";
import { Link } from "react-router-dom";
import Back from '../../Images/back.svg';


const MovieDetails = ({
  vote_average,
  title,
  release_date,
  poster_path,
  overview,
  favoriteMovie,
  favorited,
  deleteFavorite,
  showPopup,
  isLoggedIn,
  id
}) => {
  console.log({ title });
  return (
    <div className="movie-details">
      <div className="movie-grid">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="img poster"
            className="movie-poster"
          />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{overview}</p>
        </div>
      </div>
      <div>
        <Link to="/" className="back-btn">
          <img src={Back} className="back-button" />
        </Link>
        </div>
    </div>
  );
};

export default MovieDetails;