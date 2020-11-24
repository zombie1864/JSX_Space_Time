import { connect } from 'react-redux';
import ShowMyList from './showMyList';
import { fetchMyList} from '../../actions/myList_action';


const msp = state => ({
    currentUser: state.entities.users.id,
    myLists: Object.values(state.entities.myLists)
    }
);

const mdp = dispatch => ({
    fetchMyList: currentUser => dispatch(fetchMyList(currentUser))
});

export default connect(msp, mdp)(ShowMyList);