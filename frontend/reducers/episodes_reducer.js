import RECEIVE_ALL_VIDEOS from '../actions/episode_action'

const EpisodesReducer = ( state = {}, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos
        default:
            return state;
    }
};

export default EpisodesReducer;