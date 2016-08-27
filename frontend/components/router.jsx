import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import React from 'react';
import App from './app';
import SearchContainer from './search_container';
import BenchFormContainer from './bench_form_container';

const AppRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ SearchContainer }/>
      <Route path="benches/new" component={BenchFormContainer}/>
    </Route>
  </Router>
);

export default AppRouter;
