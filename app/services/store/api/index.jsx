import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { create } from "apisauce";
// npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

export const URL = "http://localhost:3000";
// export const URL = "https://4d5d-103-15-252-0.ngrok-free.app";

export const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
  },
});
const api = create({
  baseURL: `${URL}/`,
});

export default api;
