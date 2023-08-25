import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import * as types from './actionType'
import { GetAllUserApi, DeleteUserApi, AddUserApi, UpdateUserApi } from '../../api/api';
import { getUsersListFailure, getUsersList } from './action'
function* getUsersListStart(payload) {
    const { token, onSuccess, onError } = payload
    try {
        const response = yield call(GetAllUserApi, token);
        // console.log(response.data.data)
        if (response?.status === 200) {
            yield put({ type: types.GET_USERS_SUCCESS, payload: response.data.data });
            onSuccess && onSuccess();
        }

    } catch (error) {
        onError && onError()
        yield put(getUsersListFailure(error));
    } finally {
    }

}
function* deleteUserStart(payload) {
    const { token, userId, onSuccess, onError } = payload;
    try {
        const response = yield call(DeleteUserApi, {
            token: token,
            id: userId
        })
        console.log(response)
        if (response?.status === 200) {
            yield put({
                type: types.DELETE_USER_SUCCESS,
                payload: userId
            })
            onSuccess && onSuccess();
        }
    } catch (error) {
        onError && onError()
    }
}
function* addUserStart(payload) {
    const { token, data, onSuccess, onError } = payload;
    try {
        const response = yield call(AddUserApi, {
            token: token,
            data: data
        })
        // console.log(response)
        if (response?.status === 200) {
            yield put({
                type: types.ADD_USER_SUCCESS,
                payload: response.data.data
            })
            onSuccess && onSuccess();
        }
    } catch (error) {

    }
}
function* updateUserStart(payload) {
    const { token, data,userId, onSuccess, onError } = payload;
    try {
        const response = yield call(UpdateUserApi, {
            token: token,
            data: data, 
            id: userId
        });
        console.log(response)
        if (response?.status === 200) {
            yield put({
                type: types.UPDATE_USER_SUCCESS,
                payload: {
                    id: userId, 
                    updateData: response.data.data
                }
                
            })
            onSuccess && onSuccess();
        }
    } catch (error) {
        onError && onError()
    }
}
export function* onGetUsersList() {
    yield takeLatest(types.GET_USERS_START, getUsersListStart);
}

export function* onDeleteUser() {
    yield takeLatest(types.DELETE_USER_START, deleteUserStart);
}
export function* onAddUser() {
    yield takeLatest(types.ADD_USER_START, addUserStart);
}
export function* onUpdateUser() {
    yield takeLatest(types.UPDATE_USER_START, updateUserStart);
}
export default function* usersListSaga() {
    yield all([fork(onGetUsersList),
    fork(onDeleteUser),
    fork(onAddUser),
    fork(onUpdateUser)]);
}

