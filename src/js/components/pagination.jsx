import React, { Component } from 'react';
import { connect } from 'react-redux';

import { switchPage } from '../actions/newsActions';

@connect(mapStateToProps, mapDispatchToProps)
export default class Pagination extends Component {
  constructor() {
    super();

    this.renderPages = this.renderPages.bind(this);
  }

  renderPages() {

    let { currentPage: current, maxPage, switchPage } = this.props;

    let end = current + 2 > maxPage ? maxPage : current + 2;
    if (end - 5 < 0) end -= end - 5;
    if (end > maxPage) end = maxPage;
    
    let pages = [];
    for (let i = end, counter = 0; i >= 1 && counter < 5; i--) {
      pages.push(
        <span 
          onClick={switchPage}
          id={i}
          key={i}
          className={'w3-bar-item w3-button ' + (current === i ? 'w3-black' : 'w3-hover-black')}
        >
          {i}
        </span>
      );
      counter++;
    }
    return pages.reverse();
  }

  render() {
    return (
      <div className="pagination w3-center w3-padding-32">
        <div className="w3-bar">
          {this.renderPages()}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ news }) {
  return {
    currentPage: news.page,
    maxPage: news.maxPage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchPage: (e) => {
      dispatch(switchPage(e.target.id));
    }
  }
}
