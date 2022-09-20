import React from 'react';

const ArticlesCard = ( {title, abstract, multimedia} ) => {
  return (
    <div className='articles-card'>
      <h1>{title}</h1>
      <h2>{abstract}</h2>
      {/* <img > {multumedia}</img> */}

    </div>
  )
}

export default ArticlesCard;