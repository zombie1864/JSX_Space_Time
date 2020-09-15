export const createDonation = formData => (
    $.ajax({
        method: 'POST', 
        url: '/api/donations',
        data: formData,
        processData: false,
        contentType: false
    })
); 