import { SessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions.js';
import * as Util from '../util/session_api_util.js';

const SessionMiddleware = (store) => (next) => (action) => {
  const signUpandInSuccess = (user) => {
    window.currentUser = user;
    store.dispatch(receiveCurrentUser(user));
  };
  const errorCallback = (errors) => {
    store.dispatch(receiveErrors(errors.responseJSON));
  };
  switch (action.type) {
    case SessionConstants.SIGN_IN:
      Util.signIn(action.user, signUpandInSuccess, errorCallback);
      break;
    case SessionConstants.SIGN_UP:
      Util.signUp(action.user, signUpandInSuccess, errorCallback);
      break;
    case SessionConstants.SIGN_OUT:
      window.currentUser = undefined;
      Util.signOut(() => next(action));
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
