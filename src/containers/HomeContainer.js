import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as experimentsActions from '../actions/experimentsActions';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.actions.fetchExperiments();
  }

  render() {
    const { experiments } = this.props;

    return (
      <div className="home-container">
        <h1>Kapow Optimizely Dashboard</h1>
        {experiments.experimentList.map(experiment => {
          return (
            <div>
              <h3>{experiment.description}</h3>
              <ul>
                {Object.keys(experiment).map(key => <li>{`${key} - ${experiment[key]}`}</li>)}
              </ul>
            </div>
          );
        })}
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
