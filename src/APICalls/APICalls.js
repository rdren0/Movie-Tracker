const fetchCall = (URL) => {
  return fetch(URL)
    .then(response => {
     if(!response.ok) {
       throw new Error('Error fetching data')
     } 
     return response.json()
  })
}


const fetchUserData = (url, options) => {
  return fetch(url, options)
  .then(response => {
     if(!response.ok) {
      console.log('Error')
     }else{
      return response.json()
     }
  })
}


const favoriteMovieData = (url, options) => {
  fetch(url, options)
   .then(response => {
     if(!response.ok) {
      alert("You must be logged in to favorite a movie!")
      console.log('Tried to favorite w/o logging in')
     }else{
      console.log('Favorited!')
      return response.json()
     } 
  })
}


export { fetchCall, fetchUserData, favoriteMovieData }