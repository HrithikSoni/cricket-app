import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  referees: [],
  umpire: [],
  scorer: [],
  allUsers: [],
};

export const usersSlice = createSlice({
  name: "auth",
  initialState,
  // reducers: {
  //   updateAuth: (state, action) => {
  //     // const { key, data } = action.payload;
  //     // state[key] = data;
  //     state.auth = action.payload;
  //   },
  //   logoutUser: (state) => {
  //     state.auth = initialState.auth;
  //   },
  // },
});

// export const { updateAuth, logoutUser } = usersSlice.actions;

export const getUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async (users) => {}
);

export default usersSlice.reducer;
