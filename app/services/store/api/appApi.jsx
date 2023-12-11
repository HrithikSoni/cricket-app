import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const URL = "http://localhost:3000";

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
  },
});

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});
