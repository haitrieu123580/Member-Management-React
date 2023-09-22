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

export const forgotRequest = (email) =>({
  type: types.FORGOT_PWD_START, 
  payload: email
})

export const forgotPwdSuccess = () =>({
  type: types.FORGOT_PWD_SUCCESS
})

export const resetPwdRequest = ({email, otp, newPass}) =>({
  type: types.RESET_PWD_START,
  payload: {
    email: email, 
    otp: otp, 
    newPass: newPass
  }
})

export const resetPwdSuccess = () =>({
  type: types.RESET_PWD_SUCCESS
})