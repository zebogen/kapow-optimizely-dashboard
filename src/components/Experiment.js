import React, { Component, PropTypes } from 'react';
import ExperimentResults from './ExperimentResults';

class Experiment extends Component {
  hasResults() {
    return Object.keys(this.props.experiment.results || {}).length > 0;
  }

  render() {
    const {
      experiment: { results, description, details, status }
    } = this.props;

    return (
      <div className="experiment">
        <h3>{description}</h3>
        <h5>{details}</h5>
        <h5>Status: {status}</h5>
        {this.hasResults() ? <ExperimentResults results={results} /> : ''}
      </div>
    );
  }
}

export default Experiment;
