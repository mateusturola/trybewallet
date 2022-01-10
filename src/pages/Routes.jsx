import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './Login';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact patch="/" component={ Login } />
      </Switch>
    );
  }
}

export default Routes;
