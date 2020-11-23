import { connect } from 'react-redux';
import ShowMyList from './showMyList';
import { fetchMyList} from '../../actions/myList_action';


const msp = ( { session, entities: { users } }) => ({
    // videos: Object.values(state.entities.videos),
    currentUser: users[session.id],
    // currentUser: state.session.users.id,
    // myList: Object.values(state.myList)
    }
);

const mdp = dispatch => ({
    fetchMyList: currentUser => dispatch(fetchMyList(currentUser))
});

export default connect(msp, mdp)(ShowMyList);