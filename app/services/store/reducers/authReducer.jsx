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
      // const { key, data } = action.payload;
      // state[key] = data;
      state.auth = action.payload;
    },
    logoutUser: (state) => {
      state.auth = initialState.auth;
    },
  },
});

export const { updateAuth, logoutUser } = authSlice.actions;

export default authSlice.reducer;
