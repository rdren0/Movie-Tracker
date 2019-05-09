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