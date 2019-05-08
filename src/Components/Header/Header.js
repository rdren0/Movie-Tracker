import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/movie-tracker-logo.png';
import './Header.scss'


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
      </div>
    );
  }
}


export default Header;