export const getTopStories = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw response.message
  })
  .catch(err => console.log(err));
}