import React, {Component} from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'popular'
    }
  }

  render() {
    return (
      <div className="search-bar">
        <select>
          <option value="popular" default>Popular</option>
          <option value="favorites">My Favorites</option>
          <option value="action">Genre</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
        </select>
      </div>
    );
  }
}

export default Filter;
