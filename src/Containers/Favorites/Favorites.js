import React, { Component } from "react";
import "./Favorites.scss";
import { NavLink } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard.js";
import { connect } from "react-redux";
import { fetchUserData } from "../../APICalls/APICalls";
import { setFavorites } from "../../Actions";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {};
  }

  displayCards = () => {
    return this.props.favorites.map(movie => (
      <MovieCard
        {...movie}
        deleteFavorite={this.deleteFavorite}
        key={movie.movie_id}
      />
    ));
  };

  deleteFavorite = movie => {
    const url = `http://localhost:3000/api/users/${
      this.props.user.id
    }/favorites/${movie.movie_id}`;
    const userOptionObject = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };
    this.handleFavorites(url, userOptionObject);
  };

  handleFavorites = (url, options) => {
    fetchUserData(url, options)
      .then(result => {
        if (result.status === "success") {
          const url = `http://localhost:3000/api/users/${
            this.props.user.id
          }/favorites`;
          fetchUserData(url)
            .then(response => this.props.setFavorites(response.data))
            .catch(error => error);
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    let whatToRender;
    if (!this.props.favorites.length) {
      whatToRender = (
        <div>
          <p>
            You don't have any favorites! Favorite some movies and they will
            display below!
          </p>
        </div>
      );
    }
    return (
      <div className="fav-page">
        <h1>Your Favorite Movies</h1>
        {whatToRender}
        <NavLink to="/" className="return-browse">
          Back To All Movies
        </NavLink>
        <div className="fav-scroll">{this.displayCards()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  user: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  setFavorites: favorites => dispatch(setFavorites(favorites))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
