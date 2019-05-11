import React, {Component} from 'react';
import Filter from '../../Components/Filter/Filter';
import MovieCard from '../../Components/MovieCard/MovieCard'
import { connect } from 'react-redux';
import './CardContainer.scss'
import { fetchUserData } from '../../APICalls/APICalls';
import { cleanForFavorite } from '../../Utilities/Cleaners.js';
import { nextPage, setFavorites } from '../../Actions'
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
    fetchUserData(url, userOptionObject)
      .then(result => result.status === 'success' ? this.props.setFavorites([...this.props.favorites, cleanedMovie]) : null)
      .catch(error => console.log(error)) 
  }


  displayCards = () => {
    if(!this.state.favorites) {
      return this.props.movies.map(movie => <MovieCard {...movie} favoriteMovie = {this.favoriteMovie} key={movie.id}/>)
    } else {
      return this.props.favorites.map(movie => <MovieCard {...movie} key={movie.id}/>)
    }
  }

  toggleSource = () => {
    if(this.props.favorites.length) {
      this.setState({favorites: !this.state.favorites})
    } else {
      this.setState({showPopup: true})
    }
  }

  newPage = () =>{
    let value = this.props.page;
    this.props.nextPage(this.props.page)
    this.props.fetchCallFun(value+=1)
    window.scrollTo(0, 0);

  }

  render() {
    let popup;
    if(this.state.showPopup) {
      popup = <NoFavorites />
    }
    return (
      <div>
        {popup}
        <Filter toggleSource={this.toggleSource}/>
        <button className="next-page" onClick={() => this.newPage()}> Next Page </button>
        <div className='card-container'>
          {this.displayCards()}
        </div>
        <button className="next-page" onClick={() => this.newPage()}> Next Page </button>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  user: state.currentUser,
  movies: state.movies,
  page: state.page,
  favorites: state.favorites
})
const mapDispatchToProps = (dispatch) =>({
  nextPage: (value) => dispatch(nextPage(value)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites)),
  // previousPage: (value) => dispatch(previousPage(value))
})



export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);