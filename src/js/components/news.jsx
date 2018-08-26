import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeCategory } from '../actions/newsActions';
import { fetchNews } from '../actions/newsActions';
import Pagination from './pagination.jsx';
import Spinner from './spinner.jsx';
import Article from './article.jsx';

@connect(mapStateToProps, mapDispatchToProps)
export default class News extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page || prevProps.category !== this.props.category) {
      this.scrollTop();
      setTimeout(() => this.props.fetchNews(), 0);
    }
  }

  scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  render() {
    let { status, news } = this.props;

    if (status === 'loading') {
      return <Spinner />
    } else if (status === 'error') {
      return <p>Error</p>
    }

    return (
      <Fragment>
        <div className="news w3-row-padding w3-grayscale">
        {
          news.map((article) => (
            <Article key={Math.random()} article={article} />
          ))
        } 
        </div>
        <Pagination />
      </Fragment>
    )
  }
}

function mapStateToProps({ news }) {
  return {
    news: news.list,
    page: news.page,
    category: news.category,
    status: news.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNews: () => {
      dispatch(fetchNews());
    }
  }
}
