import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import React from 'react';
import App from './app';
import SearchContainer from './search_container';
import BenchFormContainer from './bench_form_container';
import SessionFormContainer from './session_form_container.js';

const AppRouter = () => {
  const _ensureSignedIn = (nextState, replace) => {
    if (window.currentUser === undefined) {
      replace('/signin');
    }
  };
  return (
    <Router history={hashHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ SearchContainer }/>
        <Route path="benches/new" component={BenchFormContainer} onEnter={ _ensureSignedIn }/>
        <Route path="signup" component={SessionFormContainer}/>
        <Route path="signin" component={SessionFormContainer}/>
      </Route>
    </Router>
  );
};

export default AppRouter;
