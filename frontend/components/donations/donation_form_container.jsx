import { connect } from 'react-redux'; 
import DonationForm from './donation_form'; 
import { createDonation } from '../../actions/donation_action' 

const mdp = dispatch => ({
    submitDonation: donation => dispatch(createDonation(donation))
}); 

export default connect( null, mdp )(DonationForm); 