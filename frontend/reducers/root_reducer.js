import { combineReducers } from 'redux';
import BenchesReducer from './benches_reducers';

const RootReducer = combineReducers({
  benches: BenchesReducer
});

export default RootReducer;
