import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// $$$$ add url here
export const URL = "https://0d77-103-15-255-245.ngrok-free.app";

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
  },
});

export const getQuery = (endpoint, type = "") => ({
  query: () => endpoint,
  providesTag: [{ type }],
});

export const postQuery = (endpoint, type = "") => {
  return {
    query(body) {
      return {
        url: endpoint,
        method: "POST",
        body,
      };
    },
    invalidatesTags: [{ type }],
  };
};

const api = createApi({
  baseQuery,
  tagTypes: ["umpire", "player"],
  endpoints: () => ({}),
});

export default api;
