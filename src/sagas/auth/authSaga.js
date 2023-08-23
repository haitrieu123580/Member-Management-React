import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { setCredentials , logout} from '../../features/auth/authSlice';
const backendURL ='http://127.0.0.1:3000';

function* userLoginSaga(action) {
  const { username, password } = action.payload;

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = yield call(
      axios.post,
      `${backendURL}/auth/login`,
      { username, password },
      config
    );
    yield put(setCredentials({ userInfo: data.message, userToken: data.accessToken }));
    localStorage.setItem('userToken', data.accessToken);
  } catch (error) {
    if (error.response && error.response.data.message) {
      // Xử lý lỗi nếu cần
        alert(error.response.data.message)
    }
  }
}

// Tạo một saga để lắng nghe action 'auth/login'
export function* watchUserLogin() {
  yield takeLatest('auth/login', userLoginSaga);
}

function* userLogoutSaga() {
  yield takeLatest(logout());
}

export function* watchUserLogout() {
  yield takeLatest('auth/logout', userLogoutSaga);
}
