import { createSlice } from "@reduxjs/toolkit";
import UTILS from "../../../utils";

const { TEAM_A, TEAM_B } = UTILS.TEAM_NAME;

const defaultCaptainWicketKeeper = { id: null, name: null };

const initialState = {
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
  name: "auth",
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
  },
});

export const { addPlayerInTeam, changeOrder, assign } = matchSlice.actions;

export const totalPlayer = (team) => (state) =>
  state.match[state.match.currentTeam].players.length;

export const allPlayers = (team) => (state) =>
  state.match[state.match.currentTeam].players;

export const getCurrentTeam = (state) => state.match.currentTeam;

export const getCaptain = (team) => (state) =>
  state.match[state.match.currentTeam].captain;

export const getWicketKeeper = (team) => (state) =>
  state.match[state.match.currentTeam].wicketKeeper;

export default matchSlice.reducer;
