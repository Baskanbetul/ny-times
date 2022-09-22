import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlesCard.css';

const ArticlesCard = ( {title, byline, multimedia, selectArticle} ) => {
  return (
    <div className='articles-card'>
      <p className='title'>{title}</p>
      <Link to ='/article/details'>
        {multimedia ? <img src={multimedia[1].url} alt={multimedia[2].caption} onClick={(event) => selectArticle(event)}></img> : <></>}
      </Link> 
      <p className='byline'>{byline}</p> 
    </div>
  )
}

export default ArticlesCard;

