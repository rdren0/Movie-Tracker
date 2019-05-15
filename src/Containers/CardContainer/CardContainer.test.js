import React from "react";
import { shallow, configure } from "enzyme";
import {CardContainer, mapStateToProps, mapDispatchToProps } from "./CardContainer";
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

describe("CardContainer", () => {
  let wrapper;
  let mockFunction = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <CardContainer browseAll={mockFunction} fetchCallFun={mockFunction} />
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

  it('should have default state', () => {
    let expectedState = {favorites: false, showPopup: false}
    expect(wrapper.state()).toEqual(expectedState) 
  })

  it('Should have function displayCards', () => {
    wrapper.instance().displayCards(mockMovies)
  })

  it('Should have function showPopup that changes state of favorites if true is passed as argument', () => {
    wrapper.state().favorites = true
    wrapper.instance().showPopup(true)
    expect(wrapper.state().favorites).toEqual(false)
  })

  it('Should have function showPopup that changes state of showPopup if false is passed as argument', () => {
    wrapper = shallow(<CardContainer browseAll={mockFunction} fetchCallFun={mockFunction} favorites={[]}/>);
    wrapper.state().showPopup = false
    wrapper.instance().showPopup(false)
    expect(wrapper.state().showPopup).toEqual(true)
  })

  it('Should have favoriteMovie', () => {
    wrapper = shallow(<CardContainer browseAll={mockFunction} fetchCallFun={mockFunction} user={{id: 1, name: 'bob'}}favorites={[]}/>);
    wrapper.instance().favoriteMovie(mockMovies[1])
  }) 

  it('Should have deleteFavorite', () => {
    wrapper = shallow(<CardContainer browseAll={mockFunction} fetchCallFun={mockFunction} user={{id: 1, name: 'bob'}}favorites={[]}/>);
    wrapper.instance().deleteFavorite(mockMovies[1])
  })

  it('Should have handleFavorites', () => {
    wrapper = shallow(<CardContainer browseAll={mockFunction} fetchCallFun={mockFunction} user={{id: 1, name: 'bob'}}favorites={[]}/>);
    let url = "http://localhost:3000/api/users/favorites/new"
    let options;
    wrapper.instance().handleFavorites(url, options)
  })
  it.skip('Should call handle favorites with the correct url when favoriteMovie is called', () => {
    wrapper = shallow(<CardContainer browseAll={mockFunction} fetchCallFun={mockFunction} user={{id: 1, name: 'bob'}}favorites={[]}/>);
    wrapper.instance().favoriteMovie(mockMovies[1])
    let options;
    let expectedUrl ="http://localhost:3000/api/users/favorites/new";
    expect(wrapper.handleFavorites).toHaveBeenCalledWith(expectedUrl, options)
  })  
})