import { ADD_EXPENSE, GET_COIN, REMOVE_EXPENSE } from '../actions';

export const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  sumExpense: 0,
  coins: [],
};

export const wallet = (state = INITIAL_STATE, action) => {
  const cases = {
    [ADD_EXPENSE]: { ...state, expenses: [...state.expenses, action.payload] },
    [GET_COIN]: { ...state, coins: action.payload },
    [REMOVE_EXPENSE]: {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.id),
    },
  };

  const data = cases[action.type];
  if (data) return data;
  return state;
};
