import { BenchConstants, receiveBenches } from '../actions/bench_actions';
import * as Util from '../util/bench_api_util';

const BenchesMiddleware = (store) => (next) => (action) => {

  const fetchSuccessCallback = (benches) => {
    store.dispatch(receiveBenches(benches));
  };

  switch (action.type) {
    case BenchConstants.REQUEST_BENCHES:
      Util.fetchBenches(fetchSuccessCallback);
      break;
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
