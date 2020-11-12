export const fetchAllVideos = () => (
    $.ajax({
        method: 'GET', 
        url: '/api/episodes'
    })
);