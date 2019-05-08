export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      console.log(action.movies)
      return action.movies.map(movie => ({...movie, id: Date.now()}))
    default:
      console.log('no movies to add')
      return state;
  }
} 