// sagas.js
import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import * as types from './actionType'
import { LoginApi, ForgotPwdApi, ResetPwdApi } from '../../api/api'; 
import {loginFailure} from './action'
function* loginStart(payload) {
  const { user, onSuccess, onError } = payload
  try {
    const response = yield call(LoginApi,user);
      if (response?.status === 200) {
          localStorage.setItem("user",response.data.message.username);
          localStorage.setItem("token", response.data.accessToken);
          localStorage.setItem("isLogin", true);
          yield put({ type: types.LOGIN_SUCCESS, payload: response.data });
          onSuccess && onSuccess();
      }

  } catch (error) {
      console.log(error)
      onError && onError()
      yield put(loginFailure(error));
  }finally {
  }

}

function* logoutStart(){
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  localStorage.setItem('isLogin', false)
  yield put({type: types.LOGOUT_SUCCESS})
}

function* forgotPwdStart(payload){
  const {email, onSuccess, onError} = payload
  try {
    const response = yield call(ForgotPwdApi, email);
    console.log(response)
    if(response?.status ===200){
      onSuccess && onSuccess();
    }
    
  } catch (error) {
    onError && onError();
  }
}

function* resetPwdStart(payload){
  const {data, onError, onSuccess} = payload
  console.log(data)
  try {
    const response = yield call(ResetPwdApi, data) 
    console.log(response)
  } catch (error) {
    
  }
}

export function* onLogin() {
  yield takeLatest(types.LOGIN_START, loginStart);
}

export function* onLogout(){
  yield takeLatest(types.LOGOUT_START, logoutStart)
}

export function* onForgotPwd(){
  yield takeLatest(types.FORGOT_PWD_START, forgotPwdStart)
}

export function* onResetPwd(){
  yield takeLatest(types.RESET_PWD_START, resetPwdStart)
}
export default function* loginSaga() {
  yield all([fork(onLogin), fork(onLogout), fork(onForgotPwd), fork(onResetPwd)]);
}


