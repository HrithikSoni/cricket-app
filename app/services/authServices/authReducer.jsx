import { createSlice } from "@reduxjs/toolkit";

// admin data ---------------------------
// const initialState = {
//   auth: {
//     contact: "9129997760",
//     firstName: "kush",
//     role: "ADMIN",
//   },
//   role: "ADMIN",
//   token:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0IjoiOTEyOTk5Nzc2MCIsImZpcnN0TmFtZSI6Imt1c2giLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MDIzNzU0ODR9.mnXhmus_BHfk9aUGooyOdhF3UgsHDRoq8qUoVvrAEBg",
// };

// user data -----------------------------
// const initialState ={
//   auth :{
//     "contact": "9129997761",
//     "firstName": "kush",
//     "role": "USER"
//   },
//   role:'USER'
//   ,
//   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0IjoiOTEyOTk5Nzc2MCIsImZpcnN0TmFtZSI6Imt1c2giLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MDIzNzU0ODR9.mnXhmus_BHfk9aUGooyOdhF3UgsHDRoq8qUoVvrAEBg"
// }

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
      state.auth = null;
      state.role = null;
      state.token = null;
    },
  },
});

export const { updateAuth, logoutUser } = authSlice.actions;

export default authSlice.reducer;
