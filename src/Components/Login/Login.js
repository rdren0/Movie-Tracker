import React, {Component} from 'react';
import { fetchUserData } from '../../APICalls/APICalls';
import { userLogin, addUser } from '../../Actions';
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
    .then(results => this.setState({ status: results.status }))
    .catch(error => alert('Email or password is incorrect') )
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

const mapDispatchToProps = (dispatch) => ({
  addCurrentUser: (user) => dispatch(userLogin(user))
})

export default connect(null, mapDispatchToProps)(Login);
