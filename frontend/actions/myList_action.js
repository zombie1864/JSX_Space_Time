import * as ListApiUtil from '../util/list_api_util'

export const RECEIVE_LIST = 'RECEIVE_LIST';

const receivelist = list => ({
    type: RECEIVE_LIST,
    list,
});

export const fetchMyList = id => dispatch => (
    ListApiUtil.fetchMyList(id).then( list => dispatch(receivelist(list)))
);