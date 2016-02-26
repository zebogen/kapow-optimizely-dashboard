import { UPDATE_EXPERIMENTS, UPDATE_RESULTS } from '../constants/ActionTypes';

const initialState = {
  experimentList: []
};

export default function experiments(state = initialState, action) {
  switch (action.type) {
    case UPDATE_EXPERIMENTS:
      return Object.assign({}, state, { experimentList: action.experiments });

    case UPDATE_RESULTS:
      return Object.assign({}, state, {
        experimentList: state.experimentList.map(experiment => {
          if (experiment.id === action.experimentId) {
            return Object.assign({}, experiment, { results: action.results });
          } else { return experiment; }
        })
      });

    default:
      return state;
  }
}
