import { createSlice } from '@reduxjs/toolkit'

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken') 
      state.loading = false
      state.userInfo = null
      state.userToken =null
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload.userInfo;
      state.userToken = payload.userToken;
    },
  },

})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer