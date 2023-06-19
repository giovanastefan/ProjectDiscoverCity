import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "../actions/userAction";

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    password: ''
  },
  loading: false,
  error: '',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          error: '',
          user: action.payload
        }
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
