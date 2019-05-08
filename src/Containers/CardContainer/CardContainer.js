import React, {Component} from 'react';
import Filter from '../../Components/Filter/Filter';
import MovieCard from '../../Components/MovieCard/MovieCard'
import { connect } from 'react-redux';

class CardContainer extends Component {

  constructor(props) {
    super(props);
  }

  displayCards = () => {
    return this.props.movies.map(movie => 
      <div key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Filter/>
        {this.displayCards()}
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  movies: state.movies
})

export default connect(mapStateToProps)(CardContainer);