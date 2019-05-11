export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAVORITES': 
      console.log('hello')
      return action.favorites.map(movie => ({...movie, favorited: !action.favorited}))
    default:
      return state
  }
}