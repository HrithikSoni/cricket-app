// api.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL, baseQuery } from ".";
import { api } from "./appApi";

//   const usersApi = createApi({
//   reducerPath: "usersApi",
//   baseQuery,
//   endpoints: (builder) => ({
//     getUsers: builder.query({
//       query: () => "/user/all-user",
//     }),
//   }),
// });

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user/all-user",
    }),
  }),
  overrideExisting: false,
});

// Export the auto-generated hooks
export const { useGetUsersQuery } = usersApi;
