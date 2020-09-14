import { connect } from 'react-redux'; 
import Donations from './donations'; 
import { donationReq } from '../../actions/donation_action' 

const msp = state => ({
    donation: Object.values(state.entities.donation)
}); 

const mdp = dispatch => ({
    donationReq: donation => dispatch(donationReq(donation))
}); 

export default connect( msp, mdp )(Donations); 