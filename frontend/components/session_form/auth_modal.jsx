import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions'

const AuthModal = props => {
    const sessionLinks = () => (
        <nav className="signin-signup">
            <button className = 'signin_button'>
                <Link to="/login" className="signin" onClick = {props.closeModal} >Sign In</Link>            
            </button>
                <Link to="/signup" onClick = {props.closeModal}className="signup">Sign up </Link>
        </nav>
    );

    return sessionLinks();
};

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect( null, mdp )(AuthModal);
