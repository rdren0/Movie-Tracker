import React, { Component } from 'react';
import './Favorites.scss'
import MovieCard from '../../Components/MovieCard/MovieCard.js'
import { connect } from 'react-redux';
import { fetchUserData } from '../../APICalls/APICalls';
import { setFavorites } from '../../Actions'


class Favorites extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  displayCards = () => {
    return this.props.favorites.map(movie => <MovieCard {...movie} deleteFavorite={this.deleteFavorite} key={movie.movie_id}/>)
  }

  deleteFavorite = (movie) => {
    const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites/${movie.movie_id}`
    const userOptionObject = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }
    this.handleFavorites(url, userOptionObject)
  }

  handleFavorites = (url, options) => {
    fetchUserData(url, options)
      .then(result => {
        if(result.status === 'success') {
        const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites`
        fetchUserData(url)
          .then(response => this.props.setFavorites(response.data))
          .catch(error => error)
        }
      })
      .catch(error => console.log(error))
  }
  



  render() {
    return (
      <div>
        <h1>Your Favorite Movies</h1>
        <div className='fav-scroll'>
          {this.displayCards()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  setFavorites: (favorites) => dispatch(setFavorites(favorites)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)