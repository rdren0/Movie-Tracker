export const cleanForFavorite = (movie, id) => {
  const { title, poster_path, release_date, vote_average, overview } = movie;
  return ({
    movie_id: movie.id, 
    user_id: id,
    title, 
    poster_path, 
    release_date, 
    vote_average, 
    overview 
  })
}

export const checkIfFavorited = (movie, favorites) => {
  if(!movie.favorited) {
    return favorites.some(favorite => favorite.movie_id === movie.id)
  } else {
    return true;
  }
}