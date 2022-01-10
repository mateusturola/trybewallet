import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      invalidFields: true,
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
    this.validateInput();
  };

  validateInput = () => {
    const { email, password } = this.state;

    const emailRegex = /\S+@\S+\.\S+/;
    const FIVE = 5;

    if (emailRegex.test(email) && password.length > FIVE) {
      this.setState((state) => ({ ...state, invalidFields: false }));
    } else {
      this.setState((state) => ({ ...state, invalidFields: true }));
    }
  };

  render() {
    const {
      state: { password, email, invalidFields },
      handleInput,
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
        <button type="button" disabled={ invalidFields }>
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
