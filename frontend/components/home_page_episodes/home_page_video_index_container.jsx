import { connect } from 'react-redux';
import HomePageVideoIndex from './video_index';
import { fetchAllVideos} from '../../actions/video_actions';


const msp = state => ({
    videos: Object.values(state.entities.videos)
    }
);

const mdp = dispatch => ({
    fetchAllVideos: videos => dispatch(fetchAllVideos(videos))
});

export default connect(msp, mdp)(VideoIndex);