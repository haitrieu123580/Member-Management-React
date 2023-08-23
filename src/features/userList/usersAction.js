import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setUsers, addUser, updateUserInState, deleteUserFromState } from './usersSlice';
const backendURL = 'http://localhost:3000';

export const fetchUsers = createAsyncThunk('usersList/fetchUsers', async ({ accessToken }, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.get(`${backendURL}/users/get-all`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    dispatch(setUsers(response.data.data))
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const createUser = createAsyncThunk('usersList/createUser', async ({ formData, accessToken }, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post(`${backendURL}/users/create-user`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    console.log(response)
    const user = response.data.data
    dispatch(addUser(user))
    return user;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk('usersList/updateUser', async ({ userId, formData, accessToken }, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.put(`${backendURL}/users/${userId}`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    dispatch(updateUserInState({ userId, updatedData: response.data.data }));
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteUserAction = createAsyncThunk('usersList/deleteUserAction', async ({ userId, accessToken }, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.delete(`${backendURL}/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    dispatch(deleteUserFromState(userId));

    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
