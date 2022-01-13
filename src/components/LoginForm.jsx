import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { userLoginAct } from '../Redux/actions';

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
    const { history, userLogin } = this.props;
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
      <div className="lgn-form">
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          id="email"
          value={ email }
          onChange={ handleInput }
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Digite sua Senha"
          name="password"
          id="password"
          value={ password }
          onChange={ handleInput }
          data-testid="password-input"
        />
        <button
          type="button"
          disabled={ invalidFields }
          onClick={ () => onSubmitForm(email) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

LoginForm.propTypes = {
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userLogin: (state) => dispatch(userLoginAct(state)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
