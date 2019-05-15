export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIES":
      return action.movies.map(movie => ({
        ...movie,
        favorited: action.favorited
      }));
    default:
      console.log("no movies to add");
      return state;
  }
};
