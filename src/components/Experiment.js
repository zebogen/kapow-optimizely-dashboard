import React, { Component, PropTypes } from 'react';
import ExperimentResults from './ExperimentResults';
import ResultsSummaryTable from './ResultsSummaryTable';

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
        <section>{`${description} (${status})`}</section>
        {this.hasResults() ? <ResultsSummaryTable results={results} /> : ''}
      </div>
    );
  }
}

export default Experiment;
