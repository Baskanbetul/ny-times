import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { getTopStories } from '../../apiCalls';
import Articles from '../Articles/Articles';
import Header from "../Header/Header";

const App = () => {
  const [ articles, setArticles ] = useState([])
  const [ singleArticle, setSingleArticle ] = useState({})

  useEffect(() => {
    getTopStories()
    .then(data => {
      console.log(data, 'DA')
      setArticles(data.results)
    })
  },[])

  // const selectArticle = (event) => {
  //   console.log(event)
  //   return articles.find(article => {
  //     if ((event.target.id) === article.id) {
  //       setSingleArticle(article)
  //     }
  //   })
  // }

  return (
    <>
    <Header/>
    <main className='App'>
      <Route exact path='/'>
      <Articles newArticles={articles}/>  
      {/* selectArticle={selectArticle} */}
      </Route>

    </main>
      </>
    // <div>
    //   <Articles newArticles={articles}/> 
      

    // </div>


  )
}

export default App;