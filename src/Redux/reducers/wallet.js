import {
  ADD_EXPENSE,
  EDT_EXPENSE,
  GET_COIN,
  REMOVE_EXPENSE,
  SAVE_EDIT,
  SAVE_EXC,
} from '../actions';

export const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  sumExpense: 0,
  exchanges: [],
  edit: false,
  editId: 0,
};

export const wallet = (state = INITIAL_STATE, action) => {
  const cases = {
    [ADD_EXPENSE]: { ...state, expenses: [...state.expenses, action.payload] },
    [EDT_EXPENSE]: { ...state, edit: true, editId: action.id },
    [GET_COIN]: { ...state, currencies: action.payload },
    [SAVE_EXC]: { ...state, exchanges: action.payload },
    [SAVE_EDIT]: {
      ...state,
      edit: false,
      expenses: state.expenses.map((ex) => (ex.id === action.id ? action.expense : ex)),
    },
    [REMOVE_EXPENSE]: {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.id),
    },
  };

  const data = cases[action.type];
  if (data) return data;
  return state;
};
