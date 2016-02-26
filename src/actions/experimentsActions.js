import { UPDATE_EXPERIMENTS } from '../constants/ActionTypes';
import { OPTIMIZELY_KEY, PROD_PROJECT_ID } from '../secrets';
import { PROD_EXPERIMENTS_URL } from '../constants/Endpoints';

const tokenHeader = { 'Token': OPTIMIZELY_KEY };

export const fetchExperiments = (url = PROD_EXPERIMENTS_URL) => {
  return (dispatch) => {
    return fetch(PROD_EXPERIMENTS_URL, { headers: tokenHeader })
            .then(response => response.json().then(json => dispatch(updateExperiments(json))));
  };
};

export const updateExperiments = (experiments) => {
  return { type: UPDATE_EXPERIMENTS, experiments };
};
