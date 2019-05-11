import React, {Component} from 'react';

class Filter extends Component {

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
        <button onClick={() => this.props.toggleSource()}>My Favorites</button>
      </div>
    );
  }
}

export default Filter;
