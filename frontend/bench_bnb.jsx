import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


import * as Action from './actions/session_actions';
window.signIn = Action.signIn;
window.signUp = Action.signUp;
window.signOut = Action.signOut;

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = {
    benches: {},
    filters: {
      bounds: {}
    }
  };
  const store = window.store = configureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
