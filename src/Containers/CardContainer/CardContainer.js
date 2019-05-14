import React, {Component} from 'react';
import Filter from '../../Components/Filter/Filter';
import MovieCard from '../../Components/MovieCard/MovieCard'
import { connect } from 'react-redux';
import './CardContainer.scss'
import { apiKey } from '../../apiKey.js';
import { addMovies } from '../../Actions';
import { fetchCall } from '../../APICalls/APICalls';
import { fetchUserData } from '../../APICalls/APICalls';
import { cleanForFavorite } from '../../Utilities/Cleaners.js';
import { previousPage, nextPage, setFavorites, changeCategory } from '../../Actions'
import NoFavorites from '../NoFavorites/NoFavorites'
 

class CardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: false,
      showPopup: false
    }
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
    this.handleFavorites(url, userOptionObject)
  }

  deleteFavorite = (movie) => {
    const movieId = movie.movie_id ? movie.movie_id : movie.id
    const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites/${movieId}`
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

  displayCards = () => {
    if(!this.state.favorites) {
      return this.props.movies.map(movie => <MovieCard {...movie} showPopup={this.showPopup} deleteFavorite={this.deleteFavorite} favorites={this.props.favorites} favoriteMovie={this.favoriteMovie} key={movie.id} />)
    } else {
      return this.props.favorites.map(movie => <MovieCard {...movie} deleteFavorite={this.deleteFavorite} key={movie.movie_id}/>)
    }
  }

  showPopup = (popup) => {
    if(popup || this.props.favorites.length) {
      this.setState({favorites: !this.state.favorites})
    } else {
      this.setState({showPopup: !this.state.showPopup})
    }
  }

  newPage = (e) =>{
    let button = e.target.value
    let value = this.props.page;
    if(button === 'next'){
      this.props.nextPage(value)
    }else if(button === 'previous'){
      this.props.previousPage(value)
    }
    setTimeout(() => this.props.fetchCallFun(value), 100)
    window.scrollTo(0, 0);

  }

  changeCat = (e) =>{
    let category = e.target.value;
    this.props.changeCategory(category);
    setTimeout(() =>this.props.fetchCallFun(), 100);
  }

   searchMovies = (search) => {
    let searchWord = search.searchWord
    fetchCall(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=%22${searchWord}%22&page=1&include_adult=false`)
    .then(result => this.props.addMovies(result.results))
    .catch(error => console.log(error))
    this.props.previousPage(2)
    window.scrollTo(0, 0);

  }

  render() {
    let popup;
    if(this.state.showPopup) {
      popup = <NoFavorites showPopup={this.showPopup}/>
    }
    return (
      <div>
        {popup}
        <Filter toggleSource={this.showPopup} changeCat={this.changeCat} searchMovies={this.searchMovies}/>
        <button className="page previous" onClick={this.newPage} value="previous"> Previous Page </button>
        <button className="page next" onClick={this.newPage} value="next"> Next Page </button>
        <div className='card-container'>
          {this.displayCards()}
        </div>
        <button className="page previous" onClick={this.newPage} value="previous"> Previous Page </button>
        <button className="page next" onClick={this.newPage} value="next"> Next Page </button>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  user: state.currentUser,
  movies: state.movies,
  page: state.page,
  favorites: state.favorites,
  category: state.category,

})
const mapDispatchToProps = (dispatch) =>({
  nextPage: (value) => dispatch(nextPage(value)),
  previousPage: (value) => dispatch(previousPage(value)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites)),
  changeCategory: (category) => dispatch(changeCategory(category)),
  addMovies:(movies) => dispatch(addMovies(movies))

})



export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);