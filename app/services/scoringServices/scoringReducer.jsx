import { createSlice } from "@reduxjs/toolkit";
const PLAYING_STATUS = {
  OUT: "OUT",
  PLAYING: "PLAYING",
  BENCH: "BENCH",
};

const playingBatsman = [
  {
    name: "John",
    id: "5f8fb1a4-86e6-4c94-8129-92d776ca5a91",
    status: PLAYING_STATUS.PLAYING,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,
    totalRun: 0,
  },
  {
    name: "Alice",
    id: "8b0656d7-7e0e-4cb6-a00b-9b0332061dd9",
    status: PLAYING_STATUS.PLAYING,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,

    totalRun: 0,
  },
  {
    name: "Bob",
    id: "db8253e8-9933-4942-a429-2f222b777906",
    status: PLAYING_STATUS.BENCH,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,

    totalRun: 0,
  },
  {
    name: "Emma",
    id: "7d8d0e24-5039-4e8d-8917-72680f16dc3d",
    status: PLAYING_STATUS.BENCH,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,

    totalRun: 0,
  },
  {
    name: "Sam",
    id: "9c5b4f6b-9c4d-4f35-b6f8-71d2e1be2d6f",
    status: PLAYING_STATUS.BENCH,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,

    totalRun: 0,
  },
  {
    name: "Olivia",
    id: "bc4ebdf7-d6f1-44e4-9e6a-3995ae27432c",
    status: PLAYING_STATUS.BENCH,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,

    totalRun: 0,
  },
  {
    name: "Charlie",
    id: "76f3f3e8-2954-480e-90cb-993f2e3f6b06",
    status: PLAYING_STATUS.BENCH,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,

    totalRun: 0,
  },
  {
    name: "Sophia",
    id: "2fbf1c3f-aa5b-4bfb-8358-67c49e1aadd7",
    status: PLAYING_STATUS.BENCH,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,

    totalRun: 0,
  },
  {
    name: "David",
    id: "dc1f3702-4ed5-4dcf-919c-15182891be57",
    status: PLAYING_STATUS.BENCH,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,

    totalRun: 0,
  },
  {
    name: "Lily",
    id: "9438f7cc-4c31-4c9f-99d3-2da5ff6eb90c",
    status: PLAYING_STATUS.BENCH,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,

    totalRun: 0,
  },
  {
    name: "Michael",
    id: "8d8e4502-c479-43ab-b6e5-8d4240e5eddb",
    status: PLAYING_STATUS.BENCH,
    4: 0,
    6: 0,
    1: 0,
    2: 0,
    3: 0,
    ballsPlayed: 0,

    totalRun: 0,
  },
];

const initialState = {
  currentScore: 0,
  totalBalls: 0,
  bouncerInCurrentOver: 0,
  wickets: 0,
  ballsPerInning: 200,
  striker: playingBatsman[0],
  nonStriker: playingBatsman[1],
  playingBatsman: playingBatsman,
  bowlDetails: [
    {
      currentScore: 0,
      run: 0,
      bawlNo: 0,
      overNo: 0,
      strikerId: "uuid",
      nonStrikerId: "uuid",
      dismissBatsman: {
        dismissType: "bowled",
        dismissedBatsmanId: "uuid",
      },
    },
  ],
  playingBowler: [],
};

export const scoringSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
    handleDismissBatsman: (state, action) => {
      const { type } = action.payload;
      state.wickets += 1;
      // update stats to out
      const nextBatsman = state.playingBatsman.find(
        (player) => player.status === PLAYING_STATUS.BENCH
      );
      state.playingBatsman = state.playingBatsman.map((player) =>
        player.id === state[type].id
          ? { ...player, status: PLAYING_STATUS.OUT }
          : player.id === nextBatsman.id
          ? { ...player, status: PLAYING_STATUS.PLAYING }
          : player
      );
      state[type] = nextBatsman;
    },
    handleUpdateBatsmanScore: (state, action) => {
      const { value } = action.payload;

      state.playingBatsman = state.playingBatsman.map((i) => {
        if (i.id === state.striker.id) {
          i[value] += 1;
          i.ballsPlayed += 1;
          i.totalRun += value;
          return i;
        } else return i;
      });
    },
    handleBowlDetails: (state, action) => {
      const {
        run,
        valid,
        invalidType,
        dismissType = null,
        dismissedBatsmanId = null,
      } = action.payload;
      state.bowlDetails.push({
        currentScore: state.currentScore,
        run,
        valid,
        invalidType,
        striker: state.striker,
        nonStriker: state.nonStriker,
        dismissBatsman: {
          dismissType,
          dismissedBatsmanId,
        },
      });
    },
  },
});

export const {
  validDelivery,
  rotateStrike,
  updateScorecardDetails,
  handleDismissBatsman,
  handleAddScore,
  handleUpdateBatsmanScore,
} = scoringSlice.actions;

export default scoringSlice.reducer;
