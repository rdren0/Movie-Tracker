export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIES":
      return action.movies.map(movie => ({
        ...movie,
        favorited: action.favorited
      }));
    default:
      return state;
  }
};
