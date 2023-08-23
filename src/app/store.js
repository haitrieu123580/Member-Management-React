import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import usersListReducer from '../features/userList/usersSlice'
import createSagaMiddleware from 'redux-saga';
import { watchUserLogin,watchUserLogout } from '../sagas/auth/authSaga';
import { watchUsers } from '../sagas/usersList/usersListSaga'; 
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    auth: authReducer,
    usersList : usersListReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMiddleware),

})
sagaMiddleware.run(watchUserLogin);
sagaMiddleware.run(watchUserLogout);
sagaMiddleware.run(watchUsers);   
export default store