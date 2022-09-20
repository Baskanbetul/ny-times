import React, { useEffect, useState } from "react";
import { getTopStories } from '../../apiCalls';
import Articles from '../Articles/Articles';

const App = () => {
  const [ articles, setArticles ] = useState([])


  useEffect(() => {
    getTopStories()
    .then(data => {
      console.log(data, 'DA')
      setArticles(data.results)
    })
  },[])

  return (
    <div>
      <Articles newArticles={articles}/> 
      

    </div>


  )
}

export default App;