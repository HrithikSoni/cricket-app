import { createSlice } from "@reduxjs/toolkit";
import {
  assignBatsmanHelper,
  dismissBatsmanHelper,
  handleAssignBowlerHelper,
} from "./helpers/playerFunc";
import {
  battingStatsHelper,
  bowlDetailsHelper,
  bowlerStatsHelper,
} from "./helpers/scoringFunc";
import { playingBatsman, playingFielders } from "./list";

const extras = {
  over: null,
  run: null,
  bowler: null,
  type: null,
};

const currentOverInit = {
  bouncer: 0,
  extras: 0,
  totalRun: 0,
  bowlerId: null,
  bowls: [],
};
// $$$$$$$$$$ different array for batsman and bowler selected from team

const initialState = {
  // match Details
  playingFielders: playingFielders,
  playingBatsman: playingBatsman,
  ballsPerInning: null,
  bowlers: [],
  batsmen: [],

  //player details
  //$$$$$$$ replace by null later
  striker: null,
  nonStriker: null,
  bowler: null,

  //score details
  bowlDetails: [], // over wise bowl details
  currentOver: currentOverInit, // on going over details
  currentScore: 0, // current score
  extras: [], // extra run details in entire inning
  totalExtraRuns: 0,
  overs: 1, // on going over
  totalBalls: 0, // on going ball
  wickets: 0, // no. of wickets down
};

export const scoringSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateBallsPerInning: (state, action) => {
      state.ballsPerInning = action.payload;
    },
    updatePlayingEleven: (state, action) => {
      const { battingTeam, fieldingTeam } = action.payload;

      state.playingFielders = fieldingTeam;
      state.playingBatsman = battingTeam;
    },

    validDelivery: (state) => {
      state.totalBalls += 1;
    },

    handleAddScore: (state, action) => {
      state.currentScore += action.payload;
    },

    rotateStrike: (state) => {
      // don't rotate if the over is complete
      if (state.totalBalls % 6 == 0) return;
      const temp = state.striker;
      state.striker = state.nonStriker;
      state.nonStriker = temp;
    },

    handleDismissBatsman: dismissBatsmanHelper,

    handleCurrentOverDetails: bowlDetailsHelper,

    handleResetCurrentOver: (state) => {
      state.bowlDetails.push(state.currentOver);
      state.currentOver = currentOverInit;
    },

    handleAssignBowler: handleAssignBowlerHelper,
    assignBatsman: assignBatsmanHelper,
    handleUpdateBatsmanStat: battingStatsHelper,
    handleUpdateBowlerStat: bowlerStatsHelper,
  },
});

export const {
  validDelivery,
  rotateStrike,
  handleAddScore,
  // new flow
  handleDismissBatsman,
  handleCurrentOverDetails,
  handleResetCurrentOver,
  assignBatsman,
  handleAssignBowler,
  handleUpdateBatsmanStat,
  handleUpdateBowlerStat,
  updatePlayingEleven,
  updateBallsPerInning,
} = scoringSlice.actions;

export default scoringSlice.reducer;
