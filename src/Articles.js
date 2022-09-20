import React from "react";
import ArticlesCard from './ArticlesCard';


const Articles = ( {articles}) => {
  const articlesCard = articles.map(article => {
    return (
      <ArticlesCard 
        title={article.title}
        abstract={article.abstract}
        multimedia={article.multimedia}
      />
    )
  })
  return (
    <div className='articles'></div>
  )
}

export default Articles;