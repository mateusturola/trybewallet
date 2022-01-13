import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <LoginForm />
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
