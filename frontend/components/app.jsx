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

const App = () => (
  <div> 
      <Modal />
    <div className = 'main-menu'>
      <header>
        <Link to = '/' className = 'header-link'>
            <h1>
              <img className = 'home-icon' src={window.Home_icon} alt="HOME"/>
            </h1>
        </Link>
      </header> 
      <div className = 'signin-button'>
        <GreetingContainer />
      </div>
    <nav >
        <ul>
            <li className = 'menu-taps'>Home</li>
            <li className = 'menu-taps'>Shows</li>
            <li className = 'menu-taps'>Video</li>
            <li className = 'menu-taps'>TV Schedules</li>
            <li className = 'menu-taps'>Shop</li>
            <li className = 'menu-taps'>Donate</li>
        </ul>
    </nav>
    </div>
    <div className = 'container'>
      <p className = 'slogan' >This is 
        <br/>
        <p>
          Space-time! 
        </p>
      </p>
      <p className = 'webpage-description'>
        Explore the universe and your mind with astrophysicist Matt O'Dowd PhD. 
      </p>
      <br/>
      <div className = 'list-and-site'>
        <p>
          + MyList 
        </p>
        <p>
          Visit Offical Site 
        </p>
      </div>
      <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          < Route path = '/api/videos/:id' component={ShowVideoContainer}/>
          <div className = 'index-videos'>
            < Route exact path = '/' component={IndexVideoContainer}/>
          </div>
      </Switch>
    </div>
  </div>
);

export default App;