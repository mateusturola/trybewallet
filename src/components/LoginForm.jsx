import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/solid';
import { getProfilePicture, userLoginAct } from '../Redux/actions';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      invalidFields: true,
    };
  }

  onSubmitForm = (email) => {
    const { history, userLogin, getPicture } = this.props;
    getPicture(email);
    userLogin(email);
    history.push('/carteira');
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
    this.validateInput();
  };

  validateInput = () => {
    const { email, password } = this.state;

    const emailRegex = /\S+@\S+\.\S+/;
    const FOUR = 4;

    if (emailRegex.test(email) && password.length > FOUR) {
      this.setState((state) => ({ ...state, invalidFields: false }));
    } else {
      this.setState((state) => ({ ...state, invalidFields: true }));
    }
  };

  render() {
    const {
      state: { password, email, invalidFields },
      handleInput,
      onSubmitForm,
    } = this;
    return (
      <div className="mt-8 space-y-3 rounded-md shadow-sm ">
        <div className="rounded-md shadow-sm -space-y-px">
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            id="email"
            value={ email }
            onChange={ handleInput }
            data-testid="email-input"
            className="bg-slate-600 appearance-none rounded-none relative
            block w-full px-3 py-2 border border-slate-700
             rounded-t-md focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="password"
            placeholder="Digite sua Senha"
            name="password"
            id="password"
            value={ password }
            onChange={ handleInput }
            data-testid="password-input"
            className="bg-slate-600 appearance-none rounded-none relative
            block w-full px-3 py-2 border border-slate-700
             rounded-t-md focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <button
          className="group relative w-full flex justify-center py-2 px-4 border
          border-transparent text-sm font-medium rounded-md
          text-white bg-indigo-600 hover:bg-indigo-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-75"
          type="button"
          disabled={ invalidFields }
          onClick={ () => onSubmitForm(email) }
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Entrar
        </button>
      </div>
    );
  }
}

LoginForm.propTypes = {
  userLogin: PropTypes.func.isRequired,
  getPicture: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userLogin: (state) => dispatch(userLoginAct(state)),
  getPicture: (email) => dispatch(getProfilePicture(email)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
