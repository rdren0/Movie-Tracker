const fetchCall = (URL) => {
  return fetch(URL)
    .then(response => {
     if(!response.ok) {
       throw new Error('Error fetching data')
     } 
     return response.json()
  })
}

export { fetchCall }