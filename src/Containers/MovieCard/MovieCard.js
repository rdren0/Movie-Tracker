import React from "react";
import { checkIfFavorited } from "../../Utilities/Cleaners";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = movie => {
  let isFavorited = movie.favorited;
  isFavorited = checkIfFavorited(movie, movie.favorites);
  movie = { ...movie, favorited: isFavorited };
  const {
    title,
    favoriteMovie,
    favorited,
    deleteFavorite,
    showPopup,
    isLoggedIn,
    id
  } = movie;
  let whichFavoriteButton;
  if (isLoggedIn === false) {
    whichFavoriteButton = (
      <button className="movie-buttons" onClick={() => showPopup()}>
        Favorite
      </button>
    );
  } else if (!favorited) {
    whichFavoriteButton = (
      <button className="movie-buttons" onClick={() => favoriteMovie(movie)}>
        Favorite
      </button>
    );
  } else {
    whichFavoriteButton = (
      <button className="movie-buttons" onClick={() => deleteFavorite(movie)}>
        Delete Favorite
      </button>
    );
  }
  return (
    <div className="movie-card">
      <img alt="movie poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <div className="movie-overview">
        <h4 className="movie-title">{title}</h4>
        {whichFavoriteButton}
        <Link to={`movies/${id}`}>
          <button className="movie-buttons"> See more </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(MovieCard);
