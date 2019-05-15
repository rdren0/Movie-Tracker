import React from "react";
import { shallow, configure } from "enzyme";
import {Favorites, mapStateToProps, mapDispatchToProps } from "./Favorites";
import Adapter from "enzyme-adapter-react-16";


let mockMovies = [
    {
      vote_count: 5257,
      id: 299534,
      video: false,
      vote_average: 8.5,
      title: 'Avengers: Endgame',
      popularity: 290.05,
      poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      original_language: 'en',
      original_title: 'Avengers: Endgame',
      genre_ids: [
        12,
        878,
        28
      ],
      backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      adult: false,
      overview: 'hello',
      release_date: '2019-04-24',
      favorited: false
    },
    {
      vote_count: 1538,
      id: 287947,
      video: false,
      vote_average: 7.1,
      title: 'Shazam!',
      popularity: 259.332,
      poster_path: '/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
      original_language: 'en',
      original_title: 'Shazam!',
      genre_ids: [
        35,
        12,
        14,
        28
      ],
      backdrop_path: '/bi4jh0Kt0uuZGsGJoUUfqmbrjQg.jpg',
      adult: false,
      overview: 'hello',
      release_date: '2019-03-23',
      favorited: false
    }]

  const mockFavorites = [{
    movie_id: 1234,
    user_id: 1,
    title: 'movie',
    poster_path:'/sdfgf/dsfgdf.jpg',
    release_date: '10-11-1111',
    vote_average: 6.6,
    overview:'overview'
  }]

describe("Favorites", () => {
  let wrapper;
  let mockFunction = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Favorites browseAll={mockFunction} fetchCallFun={mockFunction}/>
    );

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve("success")
      })
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('Should have function displayCards', () => {
    <Favorites browseAll={mockFunction} fetchCallFun={mockFunction} favorites={mockFavorites}/>
    wrapper.instance().displayCards()
  })
})