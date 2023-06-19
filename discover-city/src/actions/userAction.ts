import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../services/Login';

interface User {
  email: string;
  password: string;
}

export const loginUserAction = createAsyncThunk(
  'user/login',
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await loginUser(user);
      return response;
    } catch (error: any) {
      return rejectWithValue('User or password is invalid');
    }
  }
);
