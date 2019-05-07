import React, {Component} from 'react';

class AccountForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <p> testing</p>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <button> Sign in </button> 
        
      </div>
    );
  }
}

export default AccountForm;