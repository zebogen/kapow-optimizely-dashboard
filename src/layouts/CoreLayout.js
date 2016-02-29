import React, { Component, PropTypes } from 'react';

export default class CoreLayout extends Component {
  render() {
    return (
      <div className="layout-container">
        <div id="header">
          <nav className="navbar">
            <div id="logo-container">
              <img className="kapow_logo" src="../assets/kapow_logo.png" />
            </div>
            <div id="nav-title-container">
              <span className="dashboard-title">Optimizely Dashboard</span>
            </div>
          </nav>
        </div>
        {this.props.children}
      </div>
    );
  }
}
