import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "../actions/userAction";

const initialState = {
  user: {
    id: '',
    nome: '',
    email: '',
    senha: ''
  },
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload
        }
      });
  },
});

export default userSlice.reducer;
