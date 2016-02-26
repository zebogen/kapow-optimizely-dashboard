import React, { Component, PropTypes } from 'react';

class Experiment extends Component {
  render() {
    const { experiment } = this.props;

    return (
      <div className="experiment-container">
        <h3>{experiment.description}</h3>
        <ul>
          {Object.keys(experiment).map(key => <li>{`${key} - ${experiment[key]}`}</li>)}
        </ul>
      </div>
    );
  }
}

export default Experiment;
