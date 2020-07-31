import React from "react";
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { render } from "react-dom";
import ShowVideoContainer from './videos/show_video_container'
import IndexVideoContainer from './videos/video_index_container'

const App = () => (
  <div className = 'main-menu'>
      <header>
        <Link to = '/' className = 'header-link'>
            <h1 className = 'home-greeting'> This is Space-time! </h1>
        </Link>
      </header>
        <GreetingContainer />
        <nav>
            <ul>
                <li className = 'menu-taps'>Home</li>
                <li className = 'menu-taps'>Shows</li>
                <li className = 'menu-taps'>Video</li>
                <li className = 'menu-taps'>TV Schedules</li>
                <li className = 'menu-taps'>Shop</li>
                <li className = 'menu-taps'>Donate</li>
            </ul>
        </nav>
    <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        < Route path = '/show/:id' component={ShowVideoContainer}/>
        < Route exact path = '/' component={IndexVideoContainer}/>
    </Switch>
  </div>
);

export default App;