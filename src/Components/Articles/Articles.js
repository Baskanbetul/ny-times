import React from "react";
import ArticlesCard from '../ArticlesCard/ArticlesCard';
import { Link } from 'react-router-dom';
import DetailsCard from '../DetailsCard/DetailsCard';

const Articles = ( {newArticles, selectArticle} ) => {
  // console.log(newArticles, "NEW")
  // newArticles.length <= 0 ? return “Loading…”
  const articlesCard = newArticles.map((article, i) => {
    // console.log(article.created_date, "ART")
      return (
        <ArticlesCard
          key={i}
          title={article.title}
          byline={article.byline}
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