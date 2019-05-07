import React, {Component} from 'react';
import Filter from '../../Components/Filter/Filter';
import MovieCard from '../../Components/MovieCard/MovieCard'

class CardContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let cards;

    return (
      <div>
        <Filter/>
        {cards}
      </div>
    );
  }
}
export default CardContainer