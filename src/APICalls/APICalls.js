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
  }
}


export { fetchCall, fetchUserData }