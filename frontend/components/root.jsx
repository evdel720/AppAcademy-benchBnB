import { Provider } from 'react-redux';
import React from 'react';
import SearchContainer from './search_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { requestBenches } from '../actions/bench_actions';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={SearchContainer} />
      </Router>
    </Provider>
  );
};

export default Root;
