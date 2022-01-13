import getExchangeRates from '../../service/exchangeRates';

// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDT_EXPENSE = 'EDT_EXPENSE';
export const GET_COIN = 'GET_COIN';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const SAVE_EDIT = 'SAVE_EDIT';

export const userLoginAct = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const editExpense = (id) => ({
  type: EDT_EXPENSE,
  id,
});

export const saveEditExpense = (id, expense) => ({
  type: SAVE_EDIT,
  id,
  expense,
});

export const getCoin = (payload) => ({
  type: GET_COIN,
  payload,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});

// =========== THUNK ===========

export const madeExpenseActThunk = () => () => {
  const exchange = getExchangeRates().then((data) => data);
  return exchange;
};

export const getCoinsFetch = () => (dispatch) => getExchangeRates()
  .then((data) => Object.keys(data).filter((c) => c !== 'USDT'))
  .then((keys) => dispatch(getCoin(keys)));
