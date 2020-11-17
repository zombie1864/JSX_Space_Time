import * as VideoAPIUtil from '../util/video_api_util'; 
export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'
export const RECEIVE_MY_LIST_VIDEO_ID = 'RECEIVE_MY_LIST_VIDEO_ID'

const receiveAllVideos = videos => ({
        type: RECEIVE_ALL_VIDEOS,
        videos, 
    }
)

const receiveVideo = video => ({
        type: RECEIVE_VIDEO,
        video, 
    }
)

const receiveMyListVideoID = video => ({
    type: RECEIVE_MY_LIST_VIDEO_ID, 
    video 
})

export const fetchAllVideos = () => dispatch => (
VideoAPIUtil.fetchAllVideos().then(videos => { dispatch(receiveAllVideos(videos))})    
); 

export const fetchVideo = id => dispatch => (
VideoAPIUtil.fetchVideo(id).then(video => dispatch(receiveVideo(video)))
)

export const submitToMyList = video_id => dispatch => (
    VideoAPIUtil.submitToMyList( video_id).then( video => {dispatch(receiveMyListVideoID(video))})
)