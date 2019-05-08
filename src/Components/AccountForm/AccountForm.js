import React, {Component} from 'react';
import { fetchUserData } from '../../APICalls/APICalls';
import { userLogin} from '../../Actions';




class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      status: ''
    }
  }

  handleChange = (e) => {
    ///make toLower
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
      console.log('hooray')
    } else {
      console.log('No such account Exists')
      
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
export default AccountForm;
