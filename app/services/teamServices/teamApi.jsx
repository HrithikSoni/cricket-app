import api, { getQuery, getQueryTag, postQuery, postQueryTag } from "../api";

const teamApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query(getQueryTag("/team/get-teams", "teams")),
    addTeam: builder.mutation(postQueryTag("/team/add-team", "teams")),

    getTeamPlayers: builder.query(getQueryTag("/team/team-player", "teams")),
    addTeamPlayers: builder.mutation(
      postQueryTag("/team/add-new-team-player", "teams")
    ),

    addPlayersInMatch: builder.mutation(
      postQueryTag("/team/add-players-in-match", "match")
    ),
  }),
  overrideExisting: true,
});

export default teamApi;
