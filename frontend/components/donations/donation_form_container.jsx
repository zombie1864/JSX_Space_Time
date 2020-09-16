import { connect } from 'react-redux'; 
import DonationForm from './donation_form'; 
import { createDonation } from '../../actions/donation_action' 

// const msp = state  => ({
//     // currentUser: state.entities.users[state.session.id],
//     donation: {
//         monthly_amount: '', 
//         first_name: '', 
//         last_name: '', 
//         city: '', 
//         state: '', 
//         zip_code: '', 
//         email: ''
//     }
// }); 

const mdp = dispatch => ({
    submitDonation: donation => dispatch(createDonation(donation))
}); 

// export default connect( msp, mdp )(DonationForm); 
export default connect( null, mdp )(DonationForm); 