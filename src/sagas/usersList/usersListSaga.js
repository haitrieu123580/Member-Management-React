import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  setUsers,
  addUser,
  updateUserInState,
  deleteUserFromState,
} from '../../features/userList/usersSlice';

const backendURL = 'http://localhost:3000';

function* fetchUsersSaga(action) {
  const { accessToken } = action.payload;
  try {
    const response = yield call(axios.get, `${backendURL}/users/get-all`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    yield put(setUsers(response.data.data));
  } catch (error) {
    alert(error.response.data.message)
  }
}

function* createUserSaga(action) {
  const { formData, accessToken } = action.payload;

  try {
    const response = yield call(
      axios.post,
      `${backendURL}/users/create-user`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    const user = response.data.data;
    yield put(addUser(user));
  } catch (error) {
    alert(error.response.data)
  }
}

function* updateUserSaga(action) {
  const { formData, accessToken, userId } = action.payload;

  try {
    const response = yield call(
      axios.put,
      `${backendURL}/users/${userId}`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    const updatedUser = response.data.data;
    yield put(updateUserInState({ userId, updatedData: updatedUser }));
  } catch (error) {
    alert(error.response.data)
  }
}

function* deleteUserSaga(action) {
  const { userId, accessToken } = action.payload;

  try {
    yield call(axios.delete, `${backendURL}/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },    
    });

    yield put(deleteUserFromState(userId));
  } catch (error) {
    alert(error.response.data)
  }
}

export function* watchUsers() {
  yield takeLatest('usersList/fetchUsers', fetchUsersSaga);
  yield takeLatest('usersList/createUser', createUserSaga);
  yield takeLatest('usersList/updateUser', updateUserSaga);
  yield takeLatest('usersList/deleteUser', deleteUserSaga);
}
