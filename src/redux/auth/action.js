import * as types from './actionType';

export const loginRequest = (user) => ({
  type: types.LOGIN_START,
  payload: user
});

export const loginSuccess = (token, user) => ({
  type: types.LOGIN_SUCCESS,
  payload: { token, user }
});

export const loginFailure = error => ({
  type: types.LOGIN_FAILURE,
  payload: { error }
});
