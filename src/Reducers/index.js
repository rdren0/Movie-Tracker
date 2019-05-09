import {combineReducers} from 'redux'
import { moviesReducer } from './moviesReducer'
import { currentUserReducer } from './currentUserReducer'

const rootReducer= combineReducers({
  movies: moviesReducer,
  currenUser: currentUserReducer
})

export default rootReducer;