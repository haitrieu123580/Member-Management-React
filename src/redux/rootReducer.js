import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import usersListReducer from './usersList/reducer';
const rootReducer = combineReducers({
  auth: authReducer,
  usersList: usersListReducer
});

export default rootReducer;