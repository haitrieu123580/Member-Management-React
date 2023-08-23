import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import usersListReducer from '../features/userList/usersSlice'
const store = configureStore({
  reducer: {
    auth: authReducer,
    usersList : usersListReducer,
  },

})

export default store