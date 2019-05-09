export const addMovies = (movies) =>({
  type:'ADD_MOVIES',
  movies
})

export const userLogin = (user) => ({
  type: 'USER_LOGIN', 
  id: user.id,
  name: user.name
})

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
})
