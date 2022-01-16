import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <LoginForm />
        </div>
        <div className="col s6">image</div>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
