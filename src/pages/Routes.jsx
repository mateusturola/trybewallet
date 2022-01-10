import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './Login';
import Wallet from './Wallet';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default Routes;
