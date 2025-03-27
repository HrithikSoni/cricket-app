import api from "../api";

const regionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCountry: builder.query({
      query: () => "/region/country",
      providesTags: [{ type: "country" }],
    }),
    addCountry: builder.mutation({
      query(body) {
        return {
          url: "/region/country",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "country" }],
    }),

    getState: builder.query({
      query: () => "/region/state",
      providesTags: [{ type: "state" }],
    }),
    addState: builder.mutation({
      query(body) {
        return {
          url: "/region/state",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "state" }],
    }),

    getCity: builder.query({
      query: () => "region/city",
      providesTags: [{ type: "city" }],
    }),
    addState: builder.mutation({
      query(body) {
        return {
          url: "region/city",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "city" }],
    }),
  }),
  overrideExisting: true,
});

// Export the auto-generated hooks
export default regionApi;
