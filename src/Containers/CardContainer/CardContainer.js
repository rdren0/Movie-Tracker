import React, {Component} from 'react';
import Filter from '../../Components/Filter/Filter';
import MovieCard from '../../Components/MovieCard/MovieCard'
import { connect } from 'react-redux';
import './CardContainer.scss'
import ShowMore from 'react-show-more';
import { favoriteMovieData } from '../../APICalls/APICalls';
import { cleanForFavorite } from '../../Utilities/Cleaners.js';

class CardContainer extends Component {

  constructor(props) {
    super(props);
  }

  favoriteMovie = (movie) => {
    let id = this.props.user.id
    const cleanedMovie = cleanForFavorite(movie, id)
    const url = 'http://localhost:3000/api/users/favorites/new'
    const userOptionObject = {
      method: 'POST',
      body: JSON.stringify(cleanedMovie),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try{
      favoriteMovieData(url, userOptionObject)
      console.log('favorited')
    } catch(error) {
      console.log('unable to favorite')
    }
  }

  displayCards = () => {
    return this.props.movies.map(movie => 
      <MovieCard {...movie} favoriteMovie = {this.favoriteMovie} key={movie.id}/>
    )
  }

  render() {
    return (
      <div>
        <Filter/>
        <div className='card-container'>
          {this.displayCards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  user: state.currentUser,
  movies: state.movies
})

export default connect(mapStateToProps)(CardContainer);