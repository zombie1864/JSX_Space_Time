export const fetchMyList = currentUser => (
    $.ajax({
        url: `/api/myLists/${currentUser}`,
        method: 'GET'
    })
)