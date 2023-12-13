import api, { getQuery, postQuery } from "../store/appApi";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // getUmpire: builder.query(getQuery("/user/umpire", "umpire")),
    // addUmpire: builder.mutation(postQuery("/user/umpire", "umpire")),
    getUmpire: builder.query({
      query: () => "/user/umpire",
      providesTags: [{ type: "umpire" }],
    }),
    addUmpire: builder.mutation({
      query(body) {
        return {
          url: "/user/umpire",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "umpire" }],
    }),

    getPlayer: builder.query(getQuery("/user/player", "player")),
    addPlayer: builder.mutation(postQuery("/user/player", "player")),
  }),
  overrideExisting: true,
});

// Export the auto-generated hooks
export default usersApi;
