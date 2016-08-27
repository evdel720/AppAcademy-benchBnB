import { BenchConstants, receiveBenches } from '../actions/bench_actions';
import * as Util from '../util/bench_api_util';

const BenchesMiddleware = (store) => (next) => (action) => {

  const fetchSuccessCallback = (benches) => {
    store.dispatch(receiveBenches(benches));
  };

  switch (action.type) {
    case BenchConstants.REQUEST_BENCHES:
      let filters = {
        northEast: {lat: 37.80971, lng: -122.39208},
        southWest: {lat: 37.74187, lng: -122.47791}
      };

      Util.fetchBenches(filters, fetchSuccessCallback);
      break;
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
