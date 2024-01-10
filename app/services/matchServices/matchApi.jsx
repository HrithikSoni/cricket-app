import api, {
  getQuery,
  getQueryTag,
  patchQuery,
  postQuery,
  postQueryTag,
} from "../api";

const matchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllMatches: builder.query(getQueryTag("/match/get-match", "match")),
    getMatchById: builder.query(getQueryTag("/match/get-match-by-id", "match")),

    addNewMatch: builder.mutation(postQueryTag("/match/add-match", "match")),
    addTossDecision: builder.mutation(
      postQuery("/match/toss-decision", "match")
    ),
  }),
  overrideExisting: true,
});

export default matchApi;
