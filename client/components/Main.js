import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Switch , Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import authHOC from './authHOC';

const Main = () => (
  <main>
    <Switch>
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignupForm} />
      <Route path='/users/:id' component={ authHOC(Dashboard) } />
      <Route path='/' component={Home} />
    </Switch>
  </main>
)

export default Main;