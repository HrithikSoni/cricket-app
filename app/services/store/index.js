import { configureStore } from "@reduxjs/toolkit";

import matchReducer from "../matchServices/matchReducer.jsx";
import authReducer from "../authServices/authReducer.jsx";
import authApi from "../authServices/authApi.jsx";
import usersApi from "../usersServices/usersApi.jsx";
import regionReducer from "../regionServices/regionApi.jsx";
import api from "./appApi.jsx";
import regionApi from "../regionServices/regionApi.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    match: matchReducer,
    region: regionReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [regionApi.reducerPath]: regionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(api.middleware),
});
