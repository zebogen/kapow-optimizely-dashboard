import { PROD_PROJECT_ID } from '../secrets';

export const OPTIMIZELY_BASE_URL = 'https://www.optimizelyapis.com/experiment/v1/';

export const PROJECTS_URL = `${OPTIMIZELY_BASE_URL}projects/`;

export const PROD_EXPERIMENTS_URL = `${PROJECTS_URL}${PROD_PROJECT_ID}/experiments/`;

export const getResultsUrl = (experimentId) => `${OPTIMIZELY_BASE_URL}experiments/${experimentId}/results`;
