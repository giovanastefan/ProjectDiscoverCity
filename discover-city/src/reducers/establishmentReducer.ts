import { createSlice } from '@reduxjs/toolkit';
import { allEstablishmentAction } from '../actions/establishmentAction';
import { Establishment } from '../types/Establishment';

const initialState = {
  establishments: [] as Establishment[],
  loading: false,
};

const establishmentSlice = createSlice({
  name: 'establishment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allEstablishmentAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(allEstablishmentAction.fulfilled, (state, action) => {
        state.loading = false;
        state.establishments = action.payload;
      })
  },
});

export const { } = establishmentSlice.actions;
export default establishmentSlice.reducer;
