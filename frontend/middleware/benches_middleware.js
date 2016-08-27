import { BenchConstants, requestBenches, receiveBenches } from '../actions/bench_actions';
import { FilterConstants } from '../actions/filter_actions';
import * as Util from '../util/bench_api_util';

const BenchesMiddleware = (store) => (next) => (action) => {

  const fetchSuccessCallback = (benches) => {
    store.dispatch(receiveBenches(benches));
  };

  switch (action.type) {
    case BenchConstants.REQUEST_BENCHES:
      Util.fetchBenches(store.getState().filters, fetchSuccessCallback);
      break;
    case FilterConstants.UPDATE_BOUNDS:
      next(action);
      store.dispatch(requestBenches());
      break;
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
