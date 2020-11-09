import { connect } from 'react-redux';
import Episodes from './episodes';
import { fetchAllVideos} from '../../actions/video_actions';


const msp = state => ({
    videos: Object.values(state.entities.videos)
    }
);

const mdp = dispatch => ({
    fetchAllVideos: videos => dispatch(fetchAllVideos(videos))
});

export default connect(msp, mdp)(Episodes);