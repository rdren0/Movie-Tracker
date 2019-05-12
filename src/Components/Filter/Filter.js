import React, {Component} from 'react';

class Filter extends Component {

  render() {
    return (
      <div className="search-bar">
        <select onChange={this.props.changeCat}>
          <option value="action" default>Action</option>
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
