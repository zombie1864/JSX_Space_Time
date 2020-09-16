export const createDonation = donation => {
    // debugger
    return $.ajax({
        method: 'POST', 
        url: '/api/donations',
        data: donation,
        processData: false,
        contentType: false
    })
}; 