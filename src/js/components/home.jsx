import React, { Component } from 'react';

import Header from './header.jsx';
import News from './news.jsx';
import Footer from './footer.jsx';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <News />
        <Footer />
      </div>
    )
  }
}
