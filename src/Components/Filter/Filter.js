import React, {Component} from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar">
        <select>
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
