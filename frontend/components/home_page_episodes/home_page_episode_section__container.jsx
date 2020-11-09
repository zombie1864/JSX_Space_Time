import { connect } from 'react-redux';
import HomePageEpisodesSection from './home_page_episode_section';
import { fetchAllVideos} from '../../actions/video_actions';


const msp = state => ({
    videos: Object.values(state.entities.videos)
    }
);

const mdp = dispatch => ({
    fetchAllVideos: videos => dispatch(fetchAllVideos(videos))
});

export default connect(msp, mdp)(HomePageEpisodesSection);