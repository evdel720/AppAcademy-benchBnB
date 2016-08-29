import { SessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.user, errors: {}});
    case SessionConstants.RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case SessionConstants.SIGN_OUT:
      return {currentUser: null, errors: {}};
    default:
      return state;
  }
};

export default SessionReducer;
