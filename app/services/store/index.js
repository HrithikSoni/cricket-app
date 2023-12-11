import { configureStore } from "@reduxjs/toolkit";

import matchReduce from "./reducers/matchReduce.jsx";
import { api } from "./api/appApi.jsx";
import authReducer from "../authServices/authReducer.jsx";
import authApi from "../authServices/authApi.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    match: matchReduce,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
