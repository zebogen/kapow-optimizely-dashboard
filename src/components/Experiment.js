import React, { Component, PropTypes } from 'react';

class Experiment extends Component {
  render() {
    const { experiment } = this.props;

    return (
      <div className="experiment">
        <h3>{experiment.description}</h3>
        <h5>{experiment.details}</h5>
        <h5>Status: {experiment.status}</h5>
        <h5>Results:</h5>
        <ul>
          <li>
            {(experiment.results || []).map(result => {
              return (
                <ul>
                  {Object.keys(result).map(key => <li>{`${key}: ${result[key]}`}</li>)}
                </ul>
              );
            })}
          </li>
        </ul>
      </div>
    );
  }
}

export default Experiment;
