import React, { Component, PropTypes } from 'react';

class Experiment extends Component {
  render() {
    const {
      experiment: { results, description, details, status }
    } = this.props;

    return (
      <div className="experiment">
        <h3>{description}</h3>
        <h5>{details}</h5>
        <h5>Status: {status}</h5>
        <h5>Results:</h5>
        <ul>
          <li>
            {Object.keys(results || {}).map(goalId => {
              return (
                <ul>
                  {results[goalId].map(variation => {
                    return (
                      <li>
                        <ul>{Object.keys(variation).map(key => <li>{`${key}: ${variation[key]}`}</li>)}</ul>
                      </li>
                    );
                  })}
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
