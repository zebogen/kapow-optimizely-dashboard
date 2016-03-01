import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ResultsSummaryTable = ({ results }) => {
  const rows = Object.keys(results).map(variationId => {
    let firstCell = <td>{results[variationId][0].variation_name}</td>;
    let cells = [firstCell].concat(results[variationId].map(goal => {
      return (
        <td key={`${variationId}-cell-${goal.conversions}`}>
          {`${goal.conversions} (${goal.conversion_rate.toFixed(3)}%)`}
        </td>
      );
    }));

    return (
      <ReactCSSTransitionGroup component="tr"
                               transitionName="example"
                               transitionEnterTimeout={500}
                               transitionLeaveTimeout={300}>
        {cells}
      </ReactCSSTransitionGroup>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Variation Name</th>
            {results[Object.keys(results)[0]].map(result => <th>{result.goal_name}</th>)}
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
