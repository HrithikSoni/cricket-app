import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer.jsx";
import matchReduce from "./reducers/matchReduce.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    match: matchReduce,
  },
});
