import {combineReducers} from 'redux'
import { moviesReducer } from './moviesReducer'
import { currentUserReducer } from './currentUserReducer'
import { pageReducer } from './pageReducer'

const rootReducer= combineReducers({
  movies: moviesReducer,
  currentUser: currentUserReducer,
  page: pageReducer
})

export default rootReducer;