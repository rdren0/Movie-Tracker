import './App.scss';
import React,{ Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { apiKey } from '../../apiKey.js';
import Header from '../Header/Header';
import Login from '../Login/Login';
import MovieDetails from '../../Containers/MovieDetails/MovieDetails';
import CardContainer from '../../Containers/CardContainer/CardContainer.js';
import AddUser from '../../Containers/AddUser/AddUser';
import { fetchCall } from '../../APICalls/APICalls';
import { addMovies } from '../../Actions';
import { connect } from 'react-redux';
import Favorites from '../../Containers/Favorites/Favorites.js'

class App extends Component {

  componentDidMount = () => {
    this.fetchCallFun()
  }


  fetchCallFun = (page=1) =>{
    console.log('fetchCall running')
    fetchCall(`https://api.themoviedb.org/3/discover/movie?with_genres=${this.props.category}&sort_by=popularity.desc&page=${page}&api_key=${apiKey}`)
    .then(result => this.props.addMovies(result.results))
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div className='app-container'>
        <Header/>
        <section className='user-actions'>
          <Route exact path="/Login" render={() => (this.props.isLoggedIn ? (<Redirect to="/"/>) : (<Login/>))}/>
          <Route exact path="/SignUp" render={() => (this.props.isLoggedIn ? (<Redirect to="/"/>) : (<AddUser/>))}/>
          <Route path='/movies/:id' render={({ match }) => {const { id } = match.params;
            const movie = this.props.movies.find(movie => movie.id === parseInt(id))
            if(movie){return <MovieDetails {...movie} />}}}/>
        </section>
        <Route exact path="/" render={ () => <CardContainer fetchCallFun={this.fetchCallFun}/>}/>
        <Route exact path="/Favorites" component={Favorites} />
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  movies: state.movies,
  page: state.page,
  user: state.currentUser,
  isLoggedIn: state.isLoggedIn,
  category: state.category,

})

const mapDispatchToProps = (dispatch) =>({
  addMovies:(movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
