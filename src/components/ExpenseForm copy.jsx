import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, getCoinsFetch, madeExpenseActThunk } from '../Redux/actions';
import { addTags } from '../helpers';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'alimentação',
    };
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  clearInput = () => this.setState({
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });

  madeExpense = async () => {
    const {
      state: { value, description, currency, method, tag },
      props: { expenses, addExpense: addExpenseProp, getExchangeRates },
    } = this;

    let idGenerate = 0;
    if (expenses > 0) idGenerate = expenses;

    const exchange = await getExchangeRates();

    const expense = {
      id: idGenerate,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: exchange,
    };

    addExpenseProp(expense);
    this.clearInput();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  render() {
    const {
      state: { value, description, tag, currency },
      props: { coins },
      handleChange,
      madeExpense,
    } = this;

    return (
      <div className="expense-form">
        <input
          type="number"
          name="value"
          value={ value }
          id="value-expense"
          onChange={ handleChange }
          data-testid="value-input"
        />
        <input
          type="text"
          name="description"
          value={ description }
          id="description-expense"
          onChange={ handleChange }
          data-testid="description-input"
        />
        <select
          name="currency"
          id="currency"
          aria-label="moeda"
          onChange={ handleChange }
          data-testid="currency-input"
          value={ currency }
        >
          {coins.map((coin) => (
            <option name="moeda" value={ coin } data-testid={ coin } key={ coin }>
              {coin}
            </option>
          ))}
        </select>
        <select
          name="method"
          id="method"
          onChange={ handleChange }
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
        <button type="button" onClick={ madeExpense }>
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  expenses: PropTypes.number.isRequired,
  addExpense: PropTypes.func.isRequired,
  getExchangeRates: PropTypes.func.isRequired,
  getCoins: PropTypes.func.isRequired,
  coins: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses.length,
  sumExpense: state.wallet.sumExpense || 0,
  coins: state.wallet.currencies || ['BRT'],
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (data) => dispatch(addExpense(data)),
  getExchangeRates: () => dispatch(madeExpenseActThunk()),
  getCoins: () => dispatch(getCoinsFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
