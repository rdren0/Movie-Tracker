export const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return action.value + 1;
    case "PREVIOUS_PAGE":
      if (state > 1) {
        return action.value - 1;
      } else {
        return action.value;
      }
    default:
      return state;
  }
};
