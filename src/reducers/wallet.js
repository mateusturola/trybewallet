import { ADD_EXPENSE, SUM_EXPENSE, GET_COIN } from '../actions';

export const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  sumExpense: 0,
  coins: [],
};

export const wallet = (state = INITIAL_STATE, action) => {
  const cases = {
    [ADD_EXPENSE]: { ...state, expenses: [...state.expenses, action.payload] },
    [SUM_EXPENSE]: { ...state, sumExpense: action.payload },
    [GET_COIN]: { ...state, coins: action.payload },
  };

  const data = cases[action.type];
  if (data) return data;
  return state;
};
