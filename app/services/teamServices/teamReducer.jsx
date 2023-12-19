import { createSlice } from "@reduxjs/toolkit";
import UTILS from "../../utils";

const { TEAM_A, TEAM_B } = UTILS.TEAM_NAME;
const defaultCaptainWicketKeeper = { id: null, name: null, type: null };
const matchDetailsInitial = {
  ballType: "RED_BALL",
  countryId: "INDIA",
  date: null,
  groundName: null,
  matchType: null,
  noOfOvers: null,
  noOfPowerPlays: null,
  oversPerBowler: null,
  stateId: null,
  time: null,
};

const initialState = {
  matchDetails: matchDetailsInitial,
  [TEAM_A]: {
    name: "team A",
    teamDetails: {},
    captain: defaultCaptainWicketKeeper,
    wicketKeeper: defaultCaptainWicketKeeper,
    players: [],
  },
  [TEAM_B]: {
    name: "team B",
    teamDetails: {},
    captain: defaultCaptainWicketKeeper,
    wicketKeeper: defaultCaptainWicketKeeper,
    players: [],
  },
  currentTeam: TEAM_A,
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addPlayerInTeam: (state, action) => {
      const { team, player } = action.payload;

      const currentPlayers = state[team].players;

      const previousLength = currentPlayers.length;

      let filteredPlayers = currentPlayers.filter((i) => i.id !== player.id);

      const afterLength = filteredPlayers.length;

      if (previousLength === afterLength) {
        filteredPlayers.push(player);
      }

      state[team].players = filteredPlayers;

      return state;
    },

    changeOrder: (state, action) => {
      const { index, upDown } = action.payload;

      //  upDown == -1 means move up
      //  upDown == +1 means move down

      let players = state[state.currentTeam].players;

      const temp = players[index];
      players[index] = players[index + upDown];
      players[index + upDown] = temp;

      state[state.currentTeam].players = players;
      return state;
    },

    assign: (state, action) => {
      const { captain, wicketKeeper } = action.payload;
      if (captain) {
        state[state.currentTeam].captain = captain;
      }

      if (wicketKeeper) {
        state[state.currentTeam].wicketKeeper = wicketKeeper;
      }

      return state;
    },

    setCurrentTeamDetails: (state, action) => {
      state[state.currentTeam].teamDetails = action.payload;
      return state;
    },

    handleMatchDetails: (state, action) => {
      state.matchDetails = action.payload;
      return state;
    },

    updateCurrenTeam: (state, action) => {
      state.currentTeam = action.payload;

      return state;
    },
  },
});

export const {
  addPlayerInTeam,
  changeOrder,
  assign,
  handleMatchDetails,
  updateCurrenTeam,
  setCurrentTeamDetails,
} = teamSlice.actions;

export const totalPlayer = (state) =>
  state.team[state.team.currentTeam].players.length;

export const allPlayers = (state) => state.team[state.team.currentTeam].players;

export const getCurrentTeam = (state) => state.team.currentTeam;

export const getCaptain = (state) => state.team[state.team.currentTeam].captain;

export const getWicketKeeper = (state) =>
  state.team[state.team.currentTeam].wicketKeeper;

export const getMatchDetails = (state) => state.team.matchDetails;

export default teamSlice.reducer;
