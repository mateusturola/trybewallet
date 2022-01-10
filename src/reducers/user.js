import { USER_LOGIN } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
export const INITIAL_STATE = {
  email: '',
  logged: false,
};

export const user = (state = INITIAL_STATE, action) => {
  const cases = {
    [USER_LOGIN]: { ...state, email: action.payload, logged: true },
  };

  const data = cases[action.type];
  if (data) return data;
  return state;
};
