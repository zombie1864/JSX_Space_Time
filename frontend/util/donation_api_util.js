export const donationReq = () => (
    $.ajax({
        method: 'GET', 
        url: '/api/donations'
    })
); 