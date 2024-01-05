import api, { getQuery, getQueryTag, patchQuery, postQuery } from "../api";

const matchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllMatches: builder.query(getQueryTag("/match/get-match", "match")),
    getMatchById: builder.query(
      getQueryTag("/match/get-match-by-id", "match-players")
    ),

    addNewMatch: builder.mutation(postQuery("/match/add-match")),
    addTossDecision: builder.mutation(patchQuery("/match/toss-decision")),
  }),
  overrideExisting: true,
});

export default matchApi;
