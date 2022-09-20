import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlesCard.css';

const ArticlesCard = ( {title, abstract, multimedia, id, selectArticle} ) => {
  return (
    <div className='articles-card'>
      <Link to ='/details'>
        <img classNamae='article-multimedia' 
        id={id} 
        src={multimedia} alt={`${title} title`} 
        onClick={(event) => selectArticle(event)} ></img>
        <p className='title'>{title}</p>
      </Link>  
    </div>
  )
}

export default ArticlesCard;