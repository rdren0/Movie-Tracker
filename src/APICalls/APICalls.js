const fetchCall = url => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    return response.json();
  });
};

const fetchUserData = (url, options) => {
  return fetch(url, options).then(response => {
    if (!response.ok) {
      console.log("Error");
    } else {
      return response.json();
    }
  });
};

export { fetchCall, fetchUserData };
