import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
