import { Provider } from 'react-redux';
import React from 'react';
import SearchContainer from './search_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { requestBenches } from '../actions/bench_actions';
//TODO router should be here!!

const Root = ({ store }) => {
  const requestBenchOnEnter = () => {
    store.dispatch(requestBenches());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={SearchContainer} onEnter={requestBenchOnEnter}/>
      </Router>
    </Provider>
  );
};

export default Root;
