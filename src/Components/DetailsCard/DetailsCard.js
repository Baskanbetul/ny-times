import React from "react";
import './DetailsCard.css';

const DetailsCard = ( { singleArticle } ) => {
  return(
    <div className='details-card'>
      <p>Title: {singleArticle.title}</p>
      <img className='article-image' src={singleArticle.multimedia[0].url} alt={singleArticle.multimedia[1].caption}/>
      <p>Abstract: {singleArticle.abstract}</p>
      <p>{singleArticle.byline}</p>
      <a className='article-link' href={singleArticle.url}>For more information click this link...</a>
    </div>
  )
}

export default DetailsCard;