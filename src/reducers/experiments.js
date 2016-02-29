import { UPDATE_EXPERIMENTS, UPDATE_RESULTS } from '../constants/ActionTypes';
import { normalizeExperiments, normalizeResults } from '../utils/data';

const initialState = {
  experimentData: {}
};

export default function experiments(state = initialState, action) {
  switch (action.type) {
    case UPDATE_EXPERIMENTS:
      return Object.assign({}, state, { experimentData: normalizeExperiments(action.experiments) });

    case UPDATE_RESULTS:
      return Object.assign({}, state, { experimentData: Object.assign({},
        state.experimentData,
        { [action.experimentId]: Object.assign({}, state.experimentData[action.experimentId],
          { results: normalizeResults(action.results) }) }
      )});

    default:
      return state;
  }
}
