import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as experimentsActions from '../actions/experimentsActions';
import Experiment from '../components/Experiment';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.actions.fetchExperiments();
  }

  render() {
    const { experiments } = this.props;

    return (
      <div className="home-container">
        <h1>Kapow Optimizely Dashboard</h1>
        {experiments.experimentList.map(experiment => <Experiment experiment={experiment} />)}
      </div>
    );
  }
}

HomeContainer.propTypes = {
  experiments: PropTypes.array.isRequired,
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
