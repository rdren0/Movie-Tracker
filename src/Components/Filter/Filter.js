import React, {Component} from 'react';

class Filter extends Component {
constructor(){
  super()
  this.state={
    searchWord: ''
  }
}

  handleChange = (e) => {
    let search = e.target.value;
    this.setState({searchWord: search})
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.searchMovies(this.state)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <button className="search-button" browseAll={this.props.browseAll}>Clear Search</button>
        <input 
          className="search-input"
          onChange={this.handleChange}
          value={this.state.searchWord}
          placeholder="Search all Movies"
          type="text"
          name="search"/> 
        <button className="search-button">Search</button>
        <br/>
      </form>
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
