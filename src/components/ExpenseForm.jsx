import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addExpense,
  getCoinsFetch,
  madeExpenseActThunk,
} from "../Redux/actions";
import BtnAddExpenses from "./BtnAddExpenses";
import TitleH2 from "./TitleH2";

class ExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      description: "",
      currency: "USD",
      method: "Dinheiro",
      tag: "alimentação",
    };
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  clearInput = () =>
    this.setState({
      value: "",
      description: "",
      currency: "USD",
      method: "Dinheiro",
      tag: "Alimentação",
    });

  madeExpense = async () => {
    const {
      state: { value, description, currency, method, tag },
      props: {
        expenses,
        addExpense: addExpenseProp,
        getExchangeRates,
        closeModal,
      },
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
    closeModal();
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
      <div className="w-2/3 space-y-4">
        <TitleH2>Adicionar Despesa</TitleH2>
        <div className="mt-1 relative rounded-md shadow-sm w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="value"
            value={value}
            id="price"
            onChange={handleChange}
            data-testid="value-input"
            className="bg-slate-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <select
              name="currency"
              id="currency"
              aria-label="moeda"
              onChange={handleChange}
              data-testid="currency-input"
              value={currency}
              id="currency"
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              {coins.map((coin) => (
                <option name="moeda" value={coin} data-testid={coin} key={coin}>
                  {coin}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input
          type="text"
          name="description"
          value={description}
          id="description"
          onChange={handleChange}
          data-testid="value-input"
          className="bg-slate-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
          placeholder="Descrição"
        />
        <select
          name="method"
          id="method"
          onChange={handleChange}
          data-testid="method-input"
          className="bg-slate-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          name="tag"
          id="tag"
          onChange={handleChange}
          value={tag}
          data-testid="tag-input"
          className="bg-slate-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <BtnAddExpenses onClickButton={madeExpense} />
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
  coins: state.wallet.currencies || ["BRT"],
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (data) => dispatch(addExpense(data)),
  getExchangeRates: () => dispatch(madeExpenseActThunk()),
  getCoins: () => dispatch(getCoinsFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
