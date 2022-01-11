import getExchangeRates from '../service/exchangeRates';

// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SUM_EXPENSE = 'SUM_EXPENSE';

export const userLoginAct = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const sumExpense = (payload) => ({
  type: SUM_EXPENSE,
  payload,
});

export const madeExpenseActThunk = () => () => {
  const exchange = getExchangeRates().then((data) => data);
  return exchange;
};
