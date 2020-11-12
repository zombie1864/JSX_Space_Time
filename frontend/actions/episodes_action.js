import * as EpisodeAPIUtil from '../util/episode_api_util'; 
export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';

const receiveAllVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos, 
}
)

export const fetchAllVideos = () => dispatch => (
    VideoAPIUtil.fetchAllVideos().then(videos => { dispatch(receiveAllVideos(videos))})    
    ); 