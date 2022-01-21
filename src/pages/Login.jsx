import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

import carteira from '../img/carteira.png';

class Login extends Component {
  render() {
    const { history } = this.props;
    return (
      <div
        className="flex items-center  py-12 px-4
      sm:px-6 lg:px-8 "
      >
        <div
          className="max-w-md w-full space-y-8
          bg-slate-700 shadow overflow-hidden sm:rounded-lg p-10"
        >
          <div className="flex justify-center">
            <div className="flex justify-center w-1/3">
              <img className="mx-auto h-20 w-auto" src={ carteira } alt="logo" />
              <h1 className="mt-6 text-center text-3xl font-extrabold ">TribeWalet</h1>
            </div>
          </div>
          <div className="col s6">
            <h2 className="mt-6 text-center text-1xl font-extrabold">
              Entrar em sua conta
            </h2>
            <LoginForm history={ history } />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
