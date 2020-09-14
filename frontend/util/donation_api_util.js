export const donationReq = () => (
    $.ajax({
        method: 'POST', 
        url: '/api/donation',
        data: { donation }
    })
); 