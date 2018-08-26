import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className='w3-center loading-spinner'>
        <i className="fa fa-spinner w3-spin" style={{fontSize: '64px'}}></i>
      </div>
    )
  }
}
