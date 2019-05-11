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
      alert("Email or password is incorrect")
     }else{
      return response.json()
     }
  })
}


const addUserData = (url, options) => {
  fetch(url, options)
  .then(response => {
     if(!response.ok) {
      alert("Account already exists, please log in")
     }else{
      alert("Account created")
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

const fetchFavorites = (url) => {
  return fetch(url)
   .then(response => {
     if(!response.ok) {
      console.log('did not fetch')
     } else {
      return response.json()
     } 
  })
}


export { fetchCall, fetchUserData, addUserData, favoriteMovieData, fetchFavorites }