import './App.scss';
import React,{ Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { apiKey } from '../../apiKey.js';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CardContainer from '../../Containers/CardContainer/CardContainer.js';
import AddUser from '../../Containers/AddUser/AddUser';
import { fetchCall } from '../../APICalls/APICalls';
import { addMovies } from '../../Actions';
import { connect } from 'react-redux';

class App extends Component {
 constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.fetchCallFun()

  }

  fetchCallFun = (page=1) =>{
     fetchCall(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=${apiKey}`)
    .then(result => this.props.addMovies(result.results))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='app-container'>
        <Header/>
        <section className='btn-container'>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/SignUp" component={AddUser}/>
        </section>
        <Route exact path="/" render={ () => <CardContainer fetchCallFun={this.fetchCallFun}/>}/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  movies: state.movies,
  page: state.page
})

const mapDispatchToProps = (dispatch) =>({
  addMovies:(movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
