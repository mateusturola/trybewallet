import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  render() {
    return (
      <div className="expense-form">
        <input
          type="number"
          placeholder="Valor da Despesa"
          name="value"
          id="value-expense"
          data-testid="value-input"
        />
        <input
          type="text"
          placeholder="Descrição"
          name="description"
          id="description-expense"
          data-testid="description-input"
        />
        <select name="currency" id="currency" data-testid="currency-input">
          <option value="BRL">BRL</option>
        </select>
        <select name="method" id="method" data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão-de-crédito">Cartão de crédito</option>
          <option value="Cartão-de-débito">Cartão de débito</option>
        </select>
        <select name="tag" id="tag" data-testid="tag-input">
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
