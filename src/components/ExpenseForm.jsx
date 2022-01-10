import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  render() {
    const {
      state: { value, description, method, currency, tag },
      handleChange,
    } = this;
    return (
      <div className="expense-form">
        <input
          type="number"
          placeholder="Valor da Despesa"
          name="value"
          value={ value }
          id="value-expense"
          onChange={ handleChange }
          data-testid="value-input"
        />
        <input
          type="text"
          placeholder="Descrição"
          name="description"
          value={ description }
          id="description-expense"
          onChange={ handleChange }
          data-testid="description-input"
        />
        <select
          name="currency"
          id="currency"
          onChange={ handleChange }
          value={ currency }
          data-testid="currency-input"
        >
          <option value="BRL">BRL</option>
          <option value="BRL">BRL</option>
        </select>
        <select
          name="method"
          id="method"
          onChange={ handleChange }
          value={ method }
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          name="tag"
          id="tag"
          onChange={ handleChange }
          value={ tag }
          data-testid="tag-input"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button type="button">Adicionar Despesa</button>
      </div>
    );
  }
}

// ExpenseForm.propTypes = {};

export default ExpenseForm;
