import React, { PropTypes } from 'react';

const Goal = ({ name, results, id }) => {
  return (
    <div className="goal">
      <span>Goal: {name}</span>
      <ul>
        {results.map(variation => {
          return (
            <li>
              <ul>{Object.keys(variation).map(key => <li>{`${key}: ${variation[key]}`}</li>)}</ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Goal.propTypes = {
  name: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number
};

export default Goal;
