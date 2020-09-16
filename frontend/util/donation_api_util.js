export const createDonation = formData => {
    debugger
    return $.ajax({
        method: 'POST', 
        url: '/api/donations',
        data: formData,
        processData: false,
        contentType: false
    })
}; 