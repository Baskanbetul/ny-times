export const getTopStories = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Ixxab5GXZAoHmvesl2t8560uQRF9T122')
  .then(response => response.json())
}