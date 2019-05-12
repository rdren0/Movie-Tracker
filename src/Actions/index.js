export const addMovies = (movies) =>({
  type:'ADD_MOVIES',
  favorited: false,
  movies
})

export const userLogin = (user) => ({
  type: 'USER_LOGIN', 
  user
})

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
})

export const nextPage = (value) => ({
  type: 'NEXT_PAGE',
  value,
})

export const previousPage = (value) => ({
  type: 'PREVIOUS_PAGE',
  value,
})

export const setFavorites = (favorites) => ({
  type: 'SET_FAVORITES',
  favorited: false,
  favorites
})

export const isLoggedIn = (bool) => ({
  type: 'IS_LOGGED_IN',
  isLoggedIn: bool
})

export const changeCategory = (category) =>({
  type: 'CHANGE_CATEGORY',
  category
})
