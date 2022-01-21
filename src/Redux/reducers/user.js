import { PROFILE_PICTURE, USER_LOGIN } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
export const INITIAL_STATE = {
  email: 'exemplo@exemplo.com',
  logged: false,
  profilePicture: 'https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e',
};

export const user = (state = INITIAL_STATE, action) => {
  const cases = {
    [PROFILE_PICTURE]: { ...state, profilePicture: action.payload },
    [USER_LOGIN]: { ...state, email: action.payload, logged: true },
  };

  const data = cases[action.type];
  if (data) return data;
  return state;
};
