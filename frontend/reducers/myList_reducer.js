import {RECEIVE_LIST} from '../actions/myList_action';

const MyListsReducer = ( state = {}, action ) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_LIST: 
        return Object.assign({}, state, Object.values(action.list)); 
        default: 
        return state; 
    }
}

export default MyListsReducer; 