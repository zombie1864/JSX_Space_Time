import { connect } from 'react-redux';
import ShowMyList from './showMyList';
import { fetchAllVideos} from '../../actions/video_actions';


const msp = ( state, { session, entities: { users } }) => ({
    videos: Object.values(state.entities.videos),
    currentUser: users[session.id]
    }
);

const mdp = dispatch => ({
    fetchMyList: currentUser => dispatch(fetchMyList(currentUser))
});

export default connect(msp, mdp)(ShowMyList);