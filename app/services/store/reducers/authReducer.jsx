import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
  role: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.auth = action.payload.data;
      state.role = action.payload.data.role;
      state.token = action.payload.token;
    },
    logoutUser: (state) => {
      state.auth = initialState.auth;
    },
  },
});

export const { updateAuth, logoutUser } = authSlice.actions;

export default authSlice.reducer;
