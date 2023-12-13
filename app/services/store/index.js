import { configureStore } from "@reduxjs/toolkit";

import matchReducer from "../matchServices/matchReducer.jsx";
import authReducer from "../authServices/authReducer.jsx";
import authApi from "../authServices/authApi.jsx";
import usersApi from "../usersServices/usersApi.jsx";
import api from "./appApi.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    match: matchReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(api.middleware),
});
