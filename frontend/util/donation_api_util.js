export const createDonation = () => (
    $.ajax({
        method: 'POST', 
        url: '/api/donations',
        data: { donation }
    })
); 