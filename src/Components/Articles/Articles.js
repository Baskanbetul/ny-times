import React from "react";
import ArticlesCard from '../ArticlesCard/ArticlesCard';
import { Link } from 'react-router-dom';

const Articles = ( {newArticles} ) => {
  console.log(newArticles, "NEW")
  // newArticles.length <= 0 ? return “Loading…”
  const createArticlesCard = () => {
    return newArticles.map((article) => {
      return (
        <ArticlesCard
          key={article.created_date}
          title={article.title}
          abstract={article.abstract}
          multimedia={article.multimedia}
        />
      )
  })
}
}

export default Articles;