import React from "react";
import ArticlesCard from '../ArticlesCard/ArticlesCard';

const Articles = ( {newArticles, selectArticle} ) => {
  const articlesCard = newArticles.map((article, i) => {
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