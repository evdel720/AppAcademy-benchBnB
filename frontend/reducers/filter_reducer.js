import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

const FilterReducer = (state = { bounds: {} }, action) => {
  switch (action.type) {
    case FilterConstants.UPDATE_BOUNDS:
      return { bounds: action.bounds };
    case FilterConstants.UPDATE_FILTER:
      let newState = merge({}, state);
      newState[action.filter] = action.value;
      return newState;
    default:
      return state;
  }
};

export default FilterReducer;
