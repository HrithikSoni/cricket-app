import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// $$$$ add url here
// export const URL = "https://api.cricketapp.kalpvaig.com";
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

export const getQueryTag = (endpoint, tag) => ({
  query: (param = "") => endpoint + `/${param}`,
  providesTags: [{ type: tag }],
});

export const postQueryTag = (endpoint, tag) => {
  return {
    query(body) {
      return {
        url: endpoint,
        method: "POST",
        body,
      };
    },
    invalidatesTags: [{ type: tag }],
  };
};

const api = createApi({
  baseQuery,
  tagTypes: ["umpire", "player", "teams", "country", "state", "city"],
  endpoints: () => ({}),
});

export default api;
