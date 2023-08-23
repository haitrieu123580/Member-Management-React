import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCredentials } from './authSlice';

const backendURL ='http://127.0.0.1:3000';

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue, dispatch }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${backendURL}/auth/login`,
        { username, password },
        config
      );

      dispatch(setCredentials({userInfo: data.message, userToken: data.accessToken}));
      localStorage.setItem('userToken', data.accessToken);

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
