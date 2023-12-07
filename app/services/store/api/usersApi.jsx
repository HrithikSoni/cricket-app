// api.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL, baseQuery } from ".";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user/all-user",
    }),
  }),
});

// Export the auto-generated hooks
export const { useGetUsersQuery } = usersApi;
