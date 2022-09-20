import React, { useEffect, useState } from "react";
import { getTopStories } from './apiCalls';

const App = () => {
  const [ articles, setArticles ] = useState([])


  useEffect(() => {
    getTopStories()
    .then(data => {
      console.log(data, 'DA')
      setArticles([...articles, data])
    })
  })
}

export default App;