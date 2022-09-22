import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlesCard.css';

const ArticlesCard = ( {title, byline, multimedia, url, selectArticle} ) => {
  return (
      <div className='articles-card'>
        <b className='title'>{title}</b>
        <Link to ='/'>
          <img className='article-img' 
          src={multimedia[0].url} alt={multimedia[1].caption} 
          onClick={(event) => selectArticle(event)}></img>
        </Link> 
        <b className='byline'>{byline}</b> 
      </div>
  )
}

export default ArticlesCard;

