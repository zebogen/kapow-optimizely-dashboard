import React, { Component, PropTypes } from 'react';
import * as experimentsActions from '../actions/experimentsActions';
import Experiment from '../components/Experiment';

class ExperimentContainer extends Component {
  fetchExperimentResults() {
    if (!this.props.isFetching) {
      this.props.fetchResults(this.props.experiment.id);
    }
  }

  componentWillMount() {
    this.fetchExperimentResults();
    this.interval = setInterval(this.fetchExperimentResults.bind(this), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { experiment } = this.props;

    return (
      <div className="experiment-container">
        <Experiment experiment={experiment} />
      </div>
    );
  }
}

ExperimentContainer.propTypes = {
  experiment: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default ExperimentContainer;
