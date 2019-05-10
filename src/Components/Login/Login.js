import React, {Component} from 'react';
import { fetchUserData, fetchFavorites } from '../../APICalls/APICalls';
import { userLogin, addUser, setFavorites } from '../../Actions';
import './Login.scss';
import { connect } from 'react-redux'; 


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      status: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.type]: e.target.value.toLowerCase()
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/users'
    const userInput = this.state
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetchUserData(url, userOptionObject)
    .then(results => this.props.addCurrentUser(results.data) )
    .then(results => this.setState({ status: results.status }, () => this.getFavoriteMovies()))
    .catch(error => alert('Email or password is incorrect') )

  }

  getFavoriteMovies = () => {
    const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites`
    fetchFavorites(url)
    .then(response => this.props.setFavorites(response.data))
    .catch(error => error)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <input className='email' onChange={this.handleChange} type="email" placeholder="Email" value ={this.state.email}/>
          <input className='password' onChange={this.handleChange} type="password" placeholder="Password" value={this.state.password}/>
          <button> Sign in </button> 
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  addCurrentUser: (user) => dispatch(userLogin(user)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
