import { combineReducers } from 'redux';
import BenchesReducer from './benches_reducers';
import FilterReducer from './filter_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  benches: BenchesReducer,
  filters: FilterReducer,
  session: SessionReducer
});

export default RootReducer;
