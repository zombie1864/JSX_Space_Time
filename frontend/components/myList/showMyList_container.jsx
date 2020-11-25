import { connect } from 'react-redux';
import ShowMyList from './showMyList';
import { fetchMyList} from '../../actions/myList_action';


const msp = state => ({
    id: state.session.id,
    myLists: Object.values(state.entities.myLists)
    }
);

const mdp = dispatch => ({
    fetchMyList: id => dispatch(fetchMyList(id))
});

export default connect(msp, mdp)(ShowMyList);