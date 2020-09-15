import { connect } from 'react-redux'; 
import DonationsFrom from './donations_form'; 
import { createDonation } from '../../actions/donation_action' 

const msp = state  => ({
    currentUser: state.entities.users[state.session.id],
    donations: {
        monthly_amount: '', 
        first_name: '', 
        last_name: '', 
        city: '', 
        state: '', 
        zip_code: '', 
        email: ''
    }
}); 

const mdp = dispatch => ({
    submitDonation: donation => dispatch(createDonation(donation))
}); 

export default connect( msp, mdp )(DonationsFrom); 
// export default connect( null, mdp )(Donations); 