import api, { getQuery, postQuery } from "../api";

const matchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllMatches: builder.query(getQuery("/match/get-match")),
    addNewMatch: builder.mutation(postQuery("/match/add-match")),
  }),
  overrideExisting: true,
});

export default matchApi;
