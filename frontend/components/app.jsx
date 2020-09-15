import React from "react";
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { render } from "react-dom";
import ShowVideoContainer from './videos/show_video_container'
import IndexVideoContainer from './videos/video_index_container'
import Modal from './modal/modal';
import HomePage from './home_page/home_page'
import DonationContainer from "./donations/donations_form_container";
import DonationsForm from './donations/donations_form'

const App = () => (
  <div> 
      < Modal />
      <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          < Route path = '/api/videos/:id' component={ShowVideoContainer}/>
          < Route path = '/api/donations' component = {DonationsForm}/>
          < Route path = '/' component = {HomePage}/>
      </Switch>
  </div>
);

export default App;