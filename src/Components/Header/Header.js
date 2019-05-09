import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/movie-tracker-logo.png';
import './Header.scss'
import { NavLink } from 'react-router-dom'


class Header extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='header'>
        <Link to="/" className='logo'>
          <img src={Logo} alt='Movie Tracker Logo' />
        </Link>
        <nav>
          <NavLink to="/" className='nav-button'><h4>Browse</h4></NavLink>
          <NavLink to="/" className='nav-button'><h4>Recent</h4></NavLink>
          <NavLink to="/Login" className='nav-button'><h4>Log In</h4></NavLink>
          <NavLink to="/SignUp" className='nav-button'><h4>Sign Up</h4></NavLink>
        </nav>
      </div>
    );
  }
}


export default Header;