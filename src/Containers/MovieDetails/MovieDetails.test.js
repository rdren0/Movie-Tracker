import React from 'react';
import { shallow } from 'enzyme'
import MovieDetails from './MovieDetails'



let mockSelectedMovie = {id: 1234,
  posterImage: "https://image.tmdb.org/t/p/w500/12345678.jpg",
  rating: 9.5,
  releaseDate: "2005-07-15",
  synopsis: "The quick brown fox jumps over the...",
  title: "A title"}


describe('MovieDetails', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MovieDetails />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot when there is a selected movie', () => {
    const wrapper = shallow(
      <MovieDetails selectedMovie={mockSelectedMovie} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})