import { categoryReducer } from './categoryReducer'
import{ pageReducer } from './pageReducer'
import{ moviesReducer } from './moviesReducer'
import{ loggedInReducer } from './loggedInReducer'
import{ favoritesReducer } from './favoritesReducer'
import{ currentUserReducer } from './currentUserReducer'
import * as actions from "../actions";



describe('categoryReducer', () => {
  it("should return a category where dropdown is", () => {
    const category = '';
    const expected = 28;
    const initialState =  [{ category }] ;
    const result = categoryReducer(initialState, actions.changeCategory('action'));

    expect(result).toEqual(expected);
  });
})

describe('pageReducer', () => {
  it("should increase the page when next is clicked", () => {
    const page = 1;
    const expected = 2;
    const initialState =  { page } ;
    const result = pageReducer(initialState, actions.nextPage(1));

    expect(result).toEqual(expected);
  });
})

  describe('loggedInReducer', () => {
  it("should increase the page when next is clicked", () => {
    const isLoggedIn = false;
    const expected = true;
    const initialState =  { isLoggedIn }
    const result = loggedInReducer(initialState, actions.isLoggedIn(true));

    expect(result).toEqual(expected);
  });
})

describe('currentUserReducer', () => {
  it("should increase the page when next is clicked", () => {
    const user = {};
    const expected = {user:{}};
    const initialState =  { user }
    const result = currentUserReducer(initialState, actions.setFavorites({user:{}}));

    expect(result).toEqual(expected);
  });
})

 describe('favoritesReducer', () => {
  it.skip("should increase the page when next is clicked", () => {
    const favorited = false;
    const expected = true;
    const initialState =  { favorited }
    const result = favoritesReducer(initialState, actions.setFavorites(true));
    // expectation
    expect(result).toEqual(expected);
  });
})

 describe('moviesReducer', () => {
  it.skip("should increase the page when next is clicked", () => {
    const movies = [{title: 'yeah', favorite: false}];
    const expected = [{title: 'yeah', favorite: false}, {title: 'yes', favorite: false}];
    const initialState =  { movies } ;
    const result = moviesReducer(initialState, actions.addMovies({title: 'yes', favorite: false}));

    expect(result).toEqual(expected);
  });
})


