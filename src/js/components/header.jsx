import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeCategory } from '../actions/newsActions';

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  constructor() {
    super();

    this.renderCategories = this.renderCategories.bind(this);
  }

  renderCategories() {
    let { categories, category } = this.props;

    return categories.map((item) => (
      <button 
        onClick={this.props.changeCategory} 
        id={item}
        key={item}
        className={'w3-bar-item w3-button ' + (item === category ? 'w3-black' : '')}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </button>
    ));
  }

  render() {
    return (
      <header className="w3-panel w3-center w3-opacity" style={{padding: '128px 16px'}}>
        <h1 className="w3-xlarge">NEWSIFY</h1>
        <h1>Stay in touch.</h1>
        
        <div className="w3-padding-32">
          <div className="w3-bar w3-border">
            {this.renderCategories()}
          </div>
        </div>
      </header>
    )
  }
}

function mapStateToProps({ news }) {
  return {
    category: news.category,
    categories: news.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeCategory: (e) => {
      dispatch(changeCategory(e.target.id));
    }
  }
}
