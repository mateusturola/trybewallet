import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import LoginForm from '../components/LoginForm';
import Wallet from './Wallet';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ LoginForm } />
      </Switch>
    );
  }
}

export default Routes;
