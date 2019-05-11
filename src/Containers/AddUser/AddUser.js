import React, { Component } from 'react';
import './AddUser.scss'
import { fetchUserData } from '../../APICalls/APICalls';


class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      status: ''
    }
  }

  handleChange = (e) => {
    let value = e.target.value.toLowerCase()
    this.setState({
      [e.target.name]: value
    })
  }


  handleAddUser = (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/users/new'
    const userInput = this.state
    const userOptionObject = {
      method: 'POST',
      body: JSON.stringify(userInput),
      headers: {'Content-Type': 'application/json'}
    }
    fetchUserData(url, userOptionObject)
    .then(results => this.setState({ status: 'success'}))
    .catch(error => console.log(error))
  }

  render() {
    if(this.state.status === 'success' )
    return (
      <div>
        <form onSubmit={this.handleAddUser} className='signup-form'>
            <input className='name-input' onChange={this.handleChange} name="name" placeholder="Name" value ={this.state.name}/>
            <input className='email-input' onChange={this.handleChange} name="email" placeholder="Email" value ={this.state.email}/>
            <input className='password-input' onChange={this.handleChange} name="password" placeholder="Password" value={this.state.password}/>
            <button> Create Account </button>
        </form>
      </div>
    );
  }
}

export default AddUser
