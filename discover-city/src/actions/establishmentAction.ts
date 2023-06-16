import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllEstablishment } from '../services/Establishment/GetAllEstablishment';

export const allEstablishmentAction = createAsyncThunk(
  'establishment',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllEstablishment();
      return response;
    } catch (error: any) {
      return rejectWithValue('An error occurred while getting establishments');
    }
  }
);
