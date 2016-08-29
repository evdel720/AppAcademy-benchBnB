import SessionForm from './session_form.jsx';
import { connect } from 'react-redux';
import { signIn, signUp } from '../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => {
  let signedIn = state.session.currentUser ? true : false;
  let formType = ownProps.location.pathname.slice(1);
  return ({
    signedIn: signedIn,
    errors: state.session.errors,
    formType: formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let nextAction = formType === 'signup' ? signUp : signIn;
  return ({
    processForm: (user) => dispatch(nextAction(user))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
