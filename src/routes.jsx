import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components//views/home';
import Contact from './components//views/contact';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/contact' component={Contact} />
    <Route path='*' render={() => <Redirect to='/' />} />
  </Switch>
);

export default Routes;