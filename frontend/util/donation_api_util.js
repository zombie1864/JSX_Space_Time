export const donationReq = () => (
    $.ajax({
        method: 'POST', 
        url: '/api/donations',
        data: { donation }
    })
); 