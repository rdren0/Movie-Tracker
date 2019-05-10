export const addMovies = (movies) =>({
  type:'ADD_MOVIES',
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
