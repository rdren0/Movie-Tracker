export const loggedInReducer = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOGGED_IN':
      return action.isLoggedIn
    default: 
      return state
  }
}