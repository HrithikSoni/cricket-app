import { configureStore } from "@reduxjs/toolkit";

import api from "../api";

import teamReducer from "../teamServices/teamReducer.jsx";
import authReducer from "../authServices/authReducer.jsx";
import scoringReducer from "../../screens/ScoringScreens/scoringServices/scoringReducer.jsx";

import authApi from "../authServices/authApi.jsx";
import matchApi from "../matchServices/matchApi.jsx";
import regionApi from "../regionServices/regionApi.jsx";
import usersApi from "../usersServices/usersApi.jsx";
import teamApi from "../teamServices/teamApi.jsx";
import scoringApi from "../../screens/ScoringScreens/scoringServices/scoringApi.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    team: teamReducer,
    scoring: scoringReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [regionApi.reducerPath]: regionApi.reducer,
    [matchApi.reducerPath]: matchApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
    [scoringApi.reducerPath]: scoringApi.reducer,

    // [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(api.middleware),
});
