import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Root from "./components/root";
import configureStore from './store/store'

import * as APIUtil from './util/session_api_util' //<-- this is needed to test

document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();

    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    window.login = APIUtil.login;
    window.logout = APIUtil.logout;
    window.signup = APIUtil.signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    
    const root = document.getElementById('root'); 
    ReactDOM.render(<Root store={store} />, root)
})