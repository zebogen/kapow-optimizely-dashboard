// ----------------------------------------------------------------
// Utility functions for manipulating data from the Optimizely API.
// ----------------------------------------------------------------

// Transforms an array of experiment objects from Optimizely into an object
// mapping experiment IDs to their corresponding experiment objects.
export const normalizeExperiments = (experiments) => {
  return experiments.reduce((normalized, experiment) => {
    return Object.assign({}, normalized, { [experiment.id]: experiment });
  }, {});
};

// Transforms an array of result objects from Optimizely into an object
// mapping each variation ID (or other ID if keyField is specified) to
// an array of corresponding result objects.
export const normalizeResults = (results, keyField = 'variation_id') => {
  return results.reduce((normalized, result) => {
    // debugger;
    return Object.assign({}, normalized, {
      [result[keyField]]: Object.assign({},
        (normalized[result[keyField]] || {}),
        { [result.goal_id]: result }
      )
    });
  }, {});
};
