import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


import * as Action from './actions/bench_actions';
window.requestBenches = Action.requestBenches;
window.receiveBenches = Action.receiveBenches;


document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = {
    benches: {}
  };
  const store = window.store = configureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
