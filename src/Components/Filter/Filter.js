import React, {Component} from 'react';

class Filter extends Component {

  render() {
    return (
      <div>
        <select onChange={this.props.changeCat} className="drop-down">
          <option value="action" default>Action</option>
          <option value="adventure">Adventure</option>
          <option value="animation">Animation</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="documentary">Documentary</option>
          <option value="drama">Drama</option>
          <option value="family">Family</option>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="music">Music</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="science fiction">Science Fiction</option>
          <option value="thriller">Thriller</option>
          <option value="war">War</option>
          <option value="western">Western</option>
        </select>
        <button onClick={() => this.props.toggleSource()}>My Favorites</button>
      </div>
    );
  }
}

export default Filter;
