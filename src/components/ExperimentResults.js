import React, { PropTypes } from 'react';
import Goal from './Goal';

const ExperimentResults = ({ results }) => {
  return (
    <div className="results-container">
      <h5>Results:</h5>
      {Object.keys(results).map(goalId => {
        return (
          <Goal id={goalId}
                name={results[goalId][0].goal_name}
                results={results[goalId]} />
        );
      })}
    </div>
  );
};

ExperimentResults.propTypes = {
  results: PropTypes.object.isRequired
};

export default ExperimentResults;
