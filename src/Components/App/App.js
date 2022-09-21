import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { getTopStories } from '../../apiCalls';
import Articles from '../Articles/Articles';
import Header from "../Header/Header";
import DetailsCard from '../DetailsCard/DetailsCard';
import Dropdown from '../Dropdown/Dropdown';
import Error from '../Error/Error';


const App = () => {
  const [ articles, setArticles ] = useState([]);
  const [ singleArticle, setSingleArticle ] = useState([]);
  const [ categorie, setCategorie ] = useState('home')
  const [ isError, setIsError ] = useState(false);

  useEffect(() => {
    getTopStories(categorie)
    .then(data => {
      console.log(data, 'DA')
      setArticles(data.results)
    })
  },[])

  const selectArticle = (event) => {
    // console.log(event.target.src, "EV")
    return articles.find(article => {
      // console.log(article.url, "ART")
      if (event.target.src === article.url) {
        setSingleArticle(article)
      }
    })
  }

  const getCategorie = (event) => {
    console.log(event.target.value, "TARGET")
    setCategorie(event.target.value)
  }

  return (
    <>
    <Header />
      {isError ? <Error /> : 
        <main className='App'>
          <Route exact path='/'>
            <Dropdown categorie={categorie} getCategorie={getCategorie}/>
            <Articles newArticles={articles} selectArticle={selectArticle}/>  
          </Route>
          <Route exact path={'/details'}>
            <DetailsCard singleArticle={singleArticle}/>
          </Route>
        </main>  
      }
    
      </>
  )
}

export default App;