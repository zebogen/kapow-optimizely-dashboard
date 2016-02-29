import React, { PropTypes } from 'react';

const Goal = ({ name, results, id }) => {
  return (
    <div className="goal">
      <span>Goal: {name}</span>
      <table>
        <thead>
          <tr>
            <th>Variation</th>
            <th>Visitors</th>
            <th>Conversions</th>
            <th>Conversion Rate</th>
            <th>Improvement</th>
            <th>Statistical Significance</th>
          </tr>
        </thead>
        <tbody>
          {results.map(variation => {
            return (
              <tr>
                <td>{variation.variation_name}</td>
                <td>{variation.visitors}</td>
                <td>{variation.conversions}</td>
                <td>{variation.conversion_rate}</td>
                <td>{variation.improvement}</td>
                <td>{`${variation.statistical_significance} (${variation.status})`}</td>
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
