export const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { id: action.user.id, name: action.user.name };
    default:
      return state;
  }
};
