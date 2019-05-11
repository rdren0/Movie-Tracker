export const loggedInReducer = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOGGED_IN':
      return true
    default: 
      return state
  }
}