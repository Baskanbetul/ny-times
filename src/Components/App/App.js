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
  const [ singleArticle, setSingleArticle ] = useState({});
  const [ category, setCategory ] = useState('home')
  const [ isError, setIsError ] = useState();

  const getCategory = (category) => {
    getTopStories(category) 
    .then(data => {
    setArticles(data.results)
    })
  }

  useEffect(() => {
    getCategory(category);  
  },[category])

  const selectArticle = (event) => {
    // console.log(event.target.src, "EV")
    let selection = articles.find(article => event.target.src === article.multimedia[1].url)
    setSingleArticle(selection)
  }

  return (
    <>
    <Header />
    <Switch>
      {/* {isError ? <Error /> :  */}
        <main className='App'>
          <Route exact path='/'>
            <Dropdown getCategory={getCategory}/>
            <Articles newArticles={articles} selectArticle={selectArticle}/>  
          </Route>
          <Route exact path={'/details'}>
            <DetailsCard singleArticle={singleArticle}/>
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </main>  
      {/* } */}
      </Switch>
    
      </>
  )
}

export default App;