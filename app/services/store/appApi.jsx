import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// $$$$ add url here
export const URL = "https://api.cricketapp.kalpvaig.com";
// export const URL = "http://localhost:3000";

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
  },
});

export const getQuery = (endpoint) => ({
  query: () => endpoint,
});

export const postQuery = (endpoint) => {
  return {
    query(body) {
      return {
        url: endpoint,
        method: "POST",
        body,
      };
    },
  };
};

const api = createApi({
  baseQuery,
  tagTypes: ["umpire", "player"],
  endpoints: () => ({}),
});

export default api;
