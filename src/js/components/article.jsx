import React from 'react';


const Article = ({ article }) => (
  <div className="article w3-container w3-margin-bottom">
    <a href={article.url}>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          style={{width:'100%'}}
        />
      )}
      <div className="article__content w3-container w3-white">
        <p className='article__title'><b>{article.title}</b></p>
        <p>{article.description}</p>
      </div>
    </a>
  </div>
);

export default Article;
