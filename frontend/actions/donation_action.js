import * as DonationAPIUtil from '../util/donation_api_util'; 
export const RECEIVE_DONATION_REQ = 'RECEIVE_DONATION_REQ'; 

const receiveDonationReq = donation => ({
    type: RECEIVE_DONATION_REQ, 
    donation, 
})

export const createDonation = donation => dispatch => (
    DonationAPIUtil.createDonation(donation).then(donation => { dispatch(receiveDonationReq(donation))})
); 
