import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as experimentsActions from '../actions/experimentsActions';
import ExperimentContainer from '../containers/ExperimentContainer';

const statusSort = ['Running', 'Paused', 'Not started', 'Archived', 'Draft'];

class HomeContainer extends Component {
  componentWillMount() {
    this.props.actions.fetchExperiments();
  }

  get sortedExperiments() {
    const { experimentData } = this.props.experiments;
    return Object.keys(experimentData).sort((a, b) => {
      if (statusSort.indexOf(experimentData[a].status) > statusSort.indexOf(experimentData[b].status)) { return 1; }
      else { return -1; }
    });
  }

  render() {
    const { experiments, actions } = this.props;

    return (
      <div className="home-container">
        <h3>Production Experiments:</h3>
        {this.sortedExperiments.map(id => {
          return <ExperimentContainer experiment={experiments.experimentData[id]}
                                      isFetching={experiments.isFetching[id]}
                                      fetchResults={actions.fetchResults} />
        })}
      </div>
    );
  }
}

HomeContainer.propTypes = {
  experiments: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return { experiments: state.experiments };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(experimentsActions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
