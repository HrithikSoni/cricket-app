import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer.jsx";
import matchReduce from "./reducers/matchReduce.jsx";
import { usersApi } from "./api/usersApi.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    match: matchReduce,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
