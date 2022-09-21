import React from "react";
import './DetailsCard.css';
import { Link } from "react-router-dom";

const DetailsCard = ( { singleArticle } ) => {
  // console.log(singleArticle, "Single")
  return(
    <div className='details-card'>
        <img className='article-image' src={singleArticle.multimedia[0].url} alt={singleArticle.multimedia[1].caption}/>
        <p>Title: {singleArticle.title}</p>
        <p>Abstarct {singleArticle.abstract}</p>
        <p>Byline: {singleArticle.byline}</p>
    </div>
  )
}

export default DetailsCard;