import React, { PropTypes } from 'react';

const tableDataFactory = {
  'Variation': (data) => data.variation_name,
  'Visitors': (data) => data.visitors,
  'Conversions': (data) => data.conversions,
  'Conversion Rate': (data) => data.conversion_rate,
  'Improvement': (data) => data.improvement,
  'Statistical Significance': (data) => `${data.statistical_significance} (${data.status})`
};

const Goal = ({ name, results, id }) => {
  return (
    <div className="goal">
      <span>Goal: {name}</span>
      <table>
        <thead>
          <tr>
            {Object.keys(tableDataFactory).map(key => <th>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {results.map(variation => {
            return (
              <tr>
                {Object.keys(tableDataFactory).map(key => <td>{tableDataFactory[key](variation)}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Goal.propTypes = {
  name: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number
};

export default Goal;
