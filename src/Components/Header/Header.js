import React, { Component} from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Link to="/">
        Movie Tracker!
        </Link>
      </div>
    );
  }
}


export default Header;