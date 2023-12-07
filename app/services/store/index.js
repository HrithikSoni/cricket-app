import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer.jsx";
import matchReduce from "./reducers/matchReduce.jsx";
import { api } from "./api/appApi.jsx";
import authApi from "./api/authApi.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    match: matchReduce,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
