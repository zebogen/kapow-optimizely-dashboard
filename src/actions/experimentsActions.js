import { UPDATE_EXPERIMENTS, UPDATE_RESULTS } from '../constants/ActionTypes';
import { OPTIMIZELY_KEY, PROD_PROJECT_ID } from '../secrets';
import { PROD_EXPERIMENTS_URL, getResultsUrl } from '../constants/Endpoints';

const tokenHeader = { 'Token': OPTIMIZELY_KEY };

// ----------------------------
// Asynchronous action creators
// ----------------------------
export const fetchExperiments = (url = PROD_EXPERIMENTS_URL) => {
  return (dispatch) => {
    return fetch(PROD_EXPERIMENTS_URL, { headers: tokenHeader })
            .then(response => response.json().then(json => dispatch(updateExperiments(json))));
  };
};

export const fetchResults = (experimentId) => {
  return (dispatch) => {
    return fetch(getResultsUrl(experimentId), { headers: tokenHeader })
            .then(response => response.json().then(json => dispatch(updateResults(json, experimentId))));
  }
};

// ----------------------------
// Synchronous action creators
// ----------------------------
export const updateExperiments = (experiments) => {
  return { type: UPDATE_EXPERIMENTS, experiments };
};

export const updateResults = (results, experimentId) => {
  return { type: UPDATE_RESULTS, results, experimentId };
};
