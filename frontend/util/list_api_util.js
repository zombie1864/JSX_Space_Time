export const fetchMyList = currentUser => (
    $.ajax({
        url: `/api/myList/${currentUser}`,
        method: 'GET'
    })
)