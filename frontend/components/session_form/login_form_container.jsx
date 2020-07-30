import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import Login from './login_form';

const msp = state => {
  // debugger
  return {
    errors: state.errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup">sign up</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    login: user => dispatch(login(user))
  };
};

export default connect( msp, mdp )(Login);