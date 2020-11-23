import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import videosReducer from './videos_reducer';
import DonationsReducer from './donations_reducer';
import MyListsReducer from './myList_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer, 
  videos: videosReducer, 
  donations: DonationsReducer, 
  myLists: MyListsReducer 
});

export default entitiesReducer;