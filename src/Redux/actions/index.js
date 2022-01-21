import getExchangeRates from '../../service/exchangeRates';
import getGravatar from '../../service/getGravatar';

// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDT_EXPENSE = 'EDT_EXPENSE';
export const GET_COIN = 'GET_COIN';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const SAVE_EDIT = 'SAVE_EDIT';
export const PROFILE_PICTURE = 'PROFILE_PICTURE';
export const SAVE_EXC = 'SAVE_EXC';

export const userLoginAct = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const SaveProfilePictureAct = (payload) => ({
  type: PROFILE_PICTURE,
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
export const saveExchanges = (payload) => ({
  type: SAVE_EXC,
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
  .then((data) => Object.entries(data).filter((c) => c[0] !== 'USDT'))
  .then((keys) => {
    const coins = keys.map((c) => c[0]);
    const exchange = keys.map((c) => c[1]);
    dispatch(saveExchanges(exchange));
    dispatch(getCoin(coins));
  });

export const getProfilePicture = () => (dispatch) => getGravatar().then((picture) => dispatch(SaveProfilePictureAct(picture)));
