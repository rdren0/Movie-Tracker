import './App.css';
import React,{ Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import apiKey from '../../apiKey.js';
import Header from '../Header/Header';
import CardContainer from '../../Containers/CardContainer/CardContainer.js';
import AccountForm from '../AccountForm/AccountForm';
import {fetchCall} from '../../APICalls/APICalls';
import {addMovies} from '../../Actions';
import {connect} from 'react-redux';

class App extends Component {
 constructor(props) {
    super(props);

  }

  componentDidMount = () => {
    this.fetchCallFun()

  }

  fetchCallFun = () =>{
     fetchCall("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8752f31575d88589404f10ecb7dc7958&primary_release_date.gte=2019-01-01")
    .then(result => console.log(result.results))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Header/>
        <Link to="/Login"><button> Log In</button></Link>
        <Link to="/Movies"><button> Browse </button></Link>
        <Route exact path="/Login" component={AccountForm}/>
        <Route exact path="/Movies" component={CardContainer}/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) =>({
  addMovies:(movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(addMovies);
