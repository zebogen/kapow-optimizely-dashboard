import React, { Component, PropTypes } from 'react';
import * as experimentsActions from '../actions/experimentsActions';
import Experiment from '../components/Experiment';

class ExperimentContainer extends Component {
  componentWillMount() {
    this.props.fetchResults(this.props.experiment.id);
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
  fetchResults: PropTypes.func.isRequired
};

export default ExperimentContainer;
