import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ResultsSummaryTable = ({ results }) => {
  const rows = Object.keys(results).map(variationId => {
    let firstCell = <td>{results[variationId][Object.keys(results[variationId])[0]].variation_name}</td>;
    let cells = Object.keys(results[variationId]).sort().map(goalId => {
      return (
        <td key={`v${variationId}-g${goalId}-${results[variationId][goalId].conversions}`}
            className={results[variationId][goalId].status}>
          {`${results[variationId][goalId].conversions} (${(results[variationId][goalId].conversion_rate * 100).toFixed(2)}%)`}
        </td>
      );
    });

    return (
      <ReactCSSTransitionGroup component="tr"
                               transitionName="example"
                               transitionEnterTimeout={500}
                               transitionLeaveTimeout={300}>
        {[firstCell].concat(cells)}
      </ReactCSSTransitionGroup>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Variation Name</th>
            {Object.keys(results[Object.keys(results)[0]]).sort().map(goalId => <th>{results[Object.keys(results)[0]][goalId].goal_name}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

ResultsSummaryTable.propTypes = {
  results: PropTypes.object.isRequired
};

export default ResultsSummaryTable;
