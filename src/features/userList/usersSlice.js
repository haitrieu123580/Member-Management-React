// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'usersList',
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUserInState: (state, action) => {
      
      const updatedUser = action.payload.updatedData;
      const index = state.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        state[index] = updatedUser;
      }
    },
    deleteUserFromState: (state, action) => {
      const id = action.payload;
      return state.filter(user => user.id !== id);
    },
  },
});

export const { setUsers, addUser, updateUserInState, deleteUserFromState } = usersSlice.actions;

export default usersSlice.reducer;
