import React from "react";
import { AuthRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import ShowVideoContainer from './videos/show_video_container'
import Modal from './modal/modal';
import HomePage from './home_page/home_page'
import DonationFormContainer from '../components/donations/donation_form_container'
import DonationShow from './donations/donation_show'
import EpisodesContainer from './episodes/episodes_container'
import ShowMyListContainer from './myList/showMyList_container'

const App = () => (
  <div> 
      < Modal />
      <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          < Route path = '/videos/:id' component={ShowVideoContainer}/>
          < Route path = '/donations' component = {DonationFormContainer}/>
          < Route path = '/donation_show' component = {DonationShow}/>
          < Route path = '/episodes' component = {EpisodesContainer}/>          
          < Route path = '/myLists' component = {ShowMyListContainer}/>
          < Route path = '/' component = {HomePage}/>
      </Switch>
  </div>
);

export default App;

// the Route path = '/' always needs to be last 