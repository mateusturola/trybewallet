import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './Login';
import Wallet from './Wallet';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact patch="/" component={ Login } />
        <Route exact patch="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default Routes;
