import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


export default class Article extends Component {
  render() {
    let { article } = this.props;
    return (
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
    )
  }
}
