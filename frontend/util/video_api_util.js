export const fetchAllVideos = () => (
    $.ajax({
        method: 'GET', 
        url: '/api/video'
    })
);

export const fetchVideo = id => (
    $.ajax({
        method: 'GET', 
        url: `/api/video/${id}`
    })
);

