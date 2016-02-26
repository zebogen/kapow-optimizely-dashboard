import React, { Component, PropTypes } from 'react';

export default class CoreLayout extends Component {
  render() {
    return (
      <div className="layout-container">
        {this.props.children}
      </div>
    );
  }
}
