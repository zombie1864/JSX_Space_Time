import { RECEIVE_DONATION_REQ } from '../actions/donation_action'

const DonationsReducer = ( state = {}, action ) => {
    Object.freeze( state ); 
    switch (action.type) {
        case RECEIVE_DONATION_REQ:
            return action.donation    
        default:
            return state; 
    }
}; 

export default DonationsReducer; 