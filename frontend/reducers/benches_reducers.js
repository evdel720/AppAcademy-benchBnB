import { BenchConstants } from '../actions/bench_actions';
import merge from 'lodash/merge';


const defaultState = {};

const BenchesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BenchConstants.RECEIVE_BENCHES:
      return action.benches;
    default:
      return state;
  }
};

export default BenchesReducer;
