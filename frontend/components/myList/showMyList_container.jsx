import { connect } from 'react-redux';
import ShowMyList from './showMyList';
import { fetchAllVideos} from '../../actions/video_actions';


const msp = state => ({
    videos: Object.values(state.entities.videos)
    }
);

const mdp = dispatch => ({
    fetchAllVideos: videos => dispatch(fetchAllVideos(videos))
});

export default connect(msp, mdp)(ShowMyList);