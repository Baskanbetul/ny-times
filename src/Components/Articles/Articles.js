import React from "react";
import ArticlesCard from '../ArticlesCard/ArticlesCard';
import { Link } from 'react-router-dom';

const Articles = ( {newArticles, selectArticle} ) => {
  console.log(newArticles, "NEW")
  // newArticles.length <= 0 ? return “Loading…”
  const articlesCard = newArticles.map(article => {
    // console.log(article.created_date, "ART")
      return (
        <ArticlesCard
          id={article.id}
          key={article.created_date}
          title={article.title}
          abstract={article.abstract}
          multimedia={article.multimedia}
          selectArticle={selectArticle}
        />
      );
  });
  return (
    <section className='articles'>
      {articlesCard}
    </section>
  )
}
 

export default Articles;