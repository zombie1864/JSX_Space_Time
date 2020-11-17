export const fetchAllVideos = () => (
    $.ajax({
        method: 'GET', 
        url: '/api/videos'
    })
);

export const fetchVideo = id => (
    $.ajax({
        method: 'GET', 
        url: `/api/videos/${id}`
    })
);

export const submitToMyList = video_id => (
    $.ajax({
        method: 'POST', 
        url: `/api/videos/${video_id}/myList`
    })
)
