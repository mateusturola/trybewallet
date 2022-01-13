import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editExpense, getCoinsFetch, saveEditExpense } from '../Redux/actions';

class ExpenseFormEdit extends Component {
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

  componentDidMount() {
    this.madeInitialState();
  }

  madeInitialState = () => {
    const { getCoins, expenses, id } = this.props;
    getCoins();
    const expenseSpreed = [...expenses];
    this.setState(() => ({
      ...expenseSpreed[id],
    }));
  };

  clearInput = () => this.setState(() => ({
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
  }));

  madeExpense = async () => {
    const {
      state: { value, description, currency, method, tag, id, exchangeRates },
      props: { addExpense: addExpenseProp },
    } = this;

    const exp = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    addExpenseProp(id, exp);
    this.clearInput();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(({ state }) => ({
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
          Editar despesa
        </button>
      </div>
    );
  }
}

ExpenseFormEdit.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addExpense: PropTypes.func.isRequired,
  getCoins: PropTypes.func.isRequired,
  coins: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  sumExpense: state.wallet.sumExpense || 0,
  id: state.wallet.editId || 0,
  coins: state.wallet.currencies || ['BRT'],
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (id, exp) => dispatch(saveEditExpense(id, exp)),
  getCoins: () => dispatch(getCoinsFetch()),
  startEdit: () => dispatch(editExpense()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFormEdit);
