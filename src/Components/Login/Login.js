import React, {Component} from 'react';
import { fetchUserData } from '../../APICalls/APICalls';
import { userLogin, addUser } from '../../Actions';




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

  handleSubmit = async (e) => {
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
    const response = await fetchUserData(url, userOptionObject)
    if(response.status === 'success') {
      userLogin(response.data)
      alert('Login successful')
    } else {
      alert('Email or password is incorrect')
      
    }
    this.setState({ status: response.status })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="email" placeholder="Email" value ={this.state.email}/>
          <input onChange={this.handleChange} type="password" placeholder="Password" value={this.state.password}/>
          <button> Sign in </button> 
        </form>
      </div>
    );
  }
}
export default Login;
