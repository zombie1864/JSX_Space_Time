import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions'

const AuthModal = props => {
    const sessionLinks = () => (
        <nav className="modal-container">
            <Link to="/login" className="signin" onClick = {props.closeModal} >Sign in with JSX Account</Link>            
            <br/><br/>
            <Link to="/signup" onClick = {props.closeModal}className="signup"> 
                <p>
                    Not registered yet? <strong> Create a JSX Account</strong> 
                </p> 
            </Link>
        </nav>
    );

    return sessionLinks();
};

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect( null, mdp )(AuthModal);
