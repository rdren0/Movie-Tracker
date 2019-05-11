import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import './NoFavorites.scss'

class NoFavorites extends Component {

  render() {
    console.log(this.props.currentUser)
    let whatToRender;
    if(!this.props.currentUser.name) {
      whatToRender = 
        <article>
          <h1>You're not logged in!</h1>
          <p>Click below to sign in! Don't have an account yet? Create one below!</p>
          <div className='button-container'>
            <NavLink to='/LogIn' className='popup-btn'>Log In</NavLink>
            <NavLink to='/SignUp' className='popup-btn'>Sign Up</NavLink>
          </div>
        </article>
    } else {
      whatToRender = 
        <article>
          <h1>Hey, {this.props.currentUser.name}! It looks like you dont have any favorites yet. Browse our movies and favorite what you like!</h1>
        </article>
    }
    return(
      <div className='overlay'>
        <section className='popup'>
          {whatToRender}
          <button>x</button>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(NoFavorites);