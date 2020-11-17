import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchAllVideos, submitToMyList} from '../../actions/video_actions';


const msp = state => ({
    videos: Object.values(state.entities.videos),
    user: Object.values(state.entities.users)[0],
    }
);

const mdp = dispatch => ({
    fetchAllVideos: videos => dispatch(fetchAllVideos(videos)),
    submitToMyList: video_id => dispatch(submitToMyList( video_id ))
});

export default connect(msp, mdp)(VideoIndex);