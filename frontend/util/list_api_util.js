export const fetchMyList = id => (
    $.ajax({
        url: `/api/my_list_videos/${id}`,
        method: 'GET'
    })
)