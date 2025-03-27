import api, { getQueryTag, postQuery } from "../../../services/api";

const scoringApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMatchScoresById: builder.query(
      getQueryTag("/score/team-score", "score")
    ),
    addTeamScore: builder.mutation(postQuery("/score/team-score", "score")),
  }),

  overrideExisting: true,
});

export default scoringApi;
