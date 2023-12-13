import api, { postQuery } from "../store/appApi";

// const postQuery = (endpoint) => ({
//   query: (userData) => ({
//     url: endpoint,
//     method: "POST",
//     body: userData,
//   }),
// });

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation(postQuery("/auth/login")),
    confirmOtp: builder.mutation(postQuery("/auth/confirm-otp")),

    sendOtp: builder.mutation(postQuery("/auth/send-otp")),
    registerUser: builder.mutation(postQuery("/auth/register-user")),
  }),
  overrideExisting: true,
});

export default authApi;
