import React from "react";
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const App = () => (
  <div className = 'main-menu'>
      <header>
        <Link to = '/' className = 'header-link'>
            <h1 className = 'home-greeting'> This is Space-time! </h1>
        </Link>
        <GreetingContainer />
      </header>
        <p className = 'menu-taps'>Home</p>
        <p className = 'menu-taps'>Shows</p>
        <p className = 'menu-taps'>Video</p>
        <p className = 'menu-taps'>TV Schedules</p>
        <p className = 'menu-taps'>Shop</p>
        <p className = 'menu-taps'>Donate</p>
    <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;