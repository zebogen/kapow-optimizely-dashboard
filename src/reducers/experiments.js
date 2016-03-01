import { UPDATE_EXPERIMENTS, UPDATE_RESULTS, BEGIN_FETCH, END_FETCH } from '../constants/ActionTypes';
import { normalizeExperiments, normalizeResults } from '../utils/data';

const initialState = {
  experimentData: {},
  isFetching: {}
};

export default function experiments(state = initialState, action) {
  switch (action.type) {
    case BEGIN_FETCH:
      return Object.assign({}, state, {
        isFetching: { ...state.isFetching, [action.experimentId]: true }
      });

    case END_FETCH:
      return Object.assign({}, state, {
        isFetching: { ...state.isFetching, [action.experimentId]: false }
      });

    case UPDATE_EXPERIMENTS:
      return Object.assign({}, state, {
        experimentData: normalizeExperiments(action.experiments)
      });

    case UPDATE_RESULTS:
      return Object.assign({}, state, {
        experimentData: { ...state.experimentData,
          [action.experimentId]: {
            ...state.experimentData[action.experimentId],
            results: normalizeResults(action.results, 'variation_id')
          }
        }
      });

    default:
      return state;
  }
}
