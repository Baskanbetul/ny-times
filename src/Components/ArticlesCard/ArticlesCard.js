import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlesCard.css';

const ArticlesCard = ( {title, byline, multimedia, url, selectArticle} ) => {
  return (
    <div className='articles-card'>
      <p className='title'>{title}</p>
      <Link to ='/'>
        <img className='article-img' 
        src={multimedia[0].url} alt={multimedia[1].caption} 
        onClick={(event) => selectArticle(event)}></img>
      </Link> 
      <p className='byline'>{byline}</p> 
    </div>
  )
}

export default ArticlesCard;

