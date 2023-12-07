import { api } from "./appApi";

const postQuery = (endpoint) => ({
  query: (userData) => ({
    url: endpoint,
    method: "POST",
    body: userData,
  }),
});

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // login: builder.mutation({
    //   query: (userData) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     body: userData,
    //   }),
    // }),
    login: builder.mutation(postQuery("/auth/login")),
    confirmOtp: builder.mutation(postQuery("/auth/confirm-otp")),
  }),
  overrideExisting: true,
});

export default authApi;
