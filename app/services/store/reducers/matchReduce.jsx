import { createSlice } from "@reduxjs/toolkit";
import UTILS from "../../../utils";

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
    captain: defaultCaptainWicketKeeper,
    wicketKeeper: defaultCaptainWicketKeeper,
    players: [],
  },
  [TEAM_B]: {
    name: "team B",
    captain: defaultCaptainWicketKeeper,
    wicketKeeper: defaultCaptainWicketKeeper,
    players: [],
  },
  currentTeam: TEAM_A,
};

export const matchSlice = createSlice({
  name: "match",
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
} = matchSlice.actions;

export const totalPlayer = (state) =>
  state.match[state.match.currentTeam].players.length;

export const allPlayers = (state) =>
  state.match[state.match.currentTeam].players;

export const getCurrentTeam = (state) => state.match.currentTeam;

export const getCaptain = (state) =>
  state.match[state.match.currentTeam].captain;

export const getWicketKeeper = (state) =>
  state.match[state.match.currentTeam].wicketKeeper;

export const getMatchDetails = (state) => state.match.matchDetails;

export default matchSlice.reducer;
