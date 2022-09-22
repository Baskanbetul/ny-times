import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { getTopStories } from '../../apiCalls';
import Articles from '../Articles/Articles';
import Header from "../Header/Header";
import DetailsCard from '../DetailsCard/DetailsCard';
import Dropdown from '../Dropdown/Dropdown';
import Error from '../Error/Error';
import './App.css';

const App = () => {
  const [ articles, setArticles ] = useState([]);
  const [ singleArticle, setSingleArticle ] = useState([]);
  const [ category, setCategory ] = useState('')
  const [ isError, setIsError ] = useState(false);

  useEffect(() => {
    // !category.length ? setCategory('home') : 
    // !category.length && setCategory('home') 
    // let category = getCategory();
    // if (!category) {
    //   category = 'home'
    // }
    console.log('REQUEST', category)
    getTopStories(category)
    .then(data => {
      // console.log(data, 'DA')
      setArticles([...data.results])
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

  const getCategory = (value) => {
    value ? 
    // console.log(event.target.value, "TARGET")
    setCategory(value) : setCategory('home')
    console.log(value, "CAT")
    return value
  }

  return (
    <>
    <Header />
      {isError ? <Error /> : 
        <main className='App'>
          <Route exact path='/'>
            <Dropdown getCategory={getCategory}/>
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