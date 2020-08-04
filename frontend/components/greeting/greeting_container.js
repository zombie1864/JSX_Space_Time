import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal, closeModal} from '../../actions/modal_actions'

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()), 
    openModal:() => dispatch(openModal('auth')),
    closeModal: () => dispatch(closeModal())
});

export default connect( msp, mdp )(Greeting);