import React, {Component} from 'react';
import { fetchCall } from '../../APICalls/APICalls';



class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.type]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetchCall()
    .then(result => console.log(result))
    .catch(error => console.log(error))
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
