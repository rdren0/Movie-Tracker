const fetchCall = (URL) => {
  return fetch(URL)
    .then(response => {
     if(!response.ok) {
       throw new Error('Error fetching data')
     } 
     return response.json()
  })
}

const fetchUserData =  async (url, options) => {
  const response = await fetch(url, options)
  if(response.ok) {
    const parsedData = await response.json()
    return parsedData;
  } else {
    console.log("nope")
    return 'nope'
  }
}

const addUserData =  async (url, options) => {
  const response = await fetch(url, options)
  if(response.ok) {
    const parsedData = await response.json()
    alert("Account created")
    return parsedData;
  } else {
    alert("Account already exists, please log in")
    return 'nope'
  }
}

const favoriteMovieData = async (url, options) => {
  const response = await fetch(url, options)
  if(response.ok) {
    const parsedData = await response.json()
    console.log('Favorited!')
    return parsedData;
  } else {
    console.log('nope')
    return 'nope'
  }
}


export { fetchCall, fetchUserData, addUserData, favoriteMovieData }