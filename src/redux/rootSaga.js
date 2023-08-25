import {all} from 'redux-saga/effects'
import authSaga from './auth/saga'
import usersListSaga from './usersList/saga'
export default function* rootSaga(){
    yield all([
        authSaga(),
        usersListSaga()
    ])
}