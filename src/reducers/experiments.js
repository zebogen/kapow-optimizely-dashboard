import { UPDATE_EXPERIMENTS } from '../constants/ActionTypes';

const initialState = {
  experimentList: []
};

export default function experiments(state = initialState, action) {
  switch (action.type) {
    case UPDATE_EXPERIMENTS:
      return Object.assign({}, state, { experimentList: action.experiments });
    default:
      return state;
  }
}
