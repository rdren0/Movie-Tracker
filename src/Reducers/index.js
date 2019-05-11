import {combineReducers} from 'redux'
import { moviesReducer } from './moviesReducer'
import { currentUserReducer } from './currentUserReducer'
import { pageReducer } from './pageReducer'
import { favoritesReducer } from './favoritesReducer'
import { loggedInReducer } from './loggedInReducer'
 
const rootReducer= combineReducers({
  movies: moviesReducer,
  currentUser: currentUserReducer,
  page: pageReducer,
  favorites: favoritesReducer,
  isLoggedIn: loggedInReducer
})

export default rootReducer;