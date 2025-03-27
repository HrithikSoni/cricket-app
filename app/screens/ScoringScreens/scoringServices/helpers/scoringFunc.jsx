import UTILS from "../../../../utils";

export const updateScoringDetailsHelper = (state, action) => {
  const { currentInning } = action.payload;

  if (currentInning) {
    state.currentInning = currentInning;
  }
};

export const battingStatsHelper = (state, action) => {
  const { run } = action.payload;

  const updatedStriker = (batsman, run) => {
    return {
      ...batsman,
      [run]: batsman[run] + 1,
      ballsPlayed: batsman.ballsPlayed + 1,
      totalRun: batsman.totalRun + run,
      strikeRate:
        ((batsman.totalRun + run) / (batsman.ballsPlayed + 1)).toFixed(1) || 0,
    };
  };
  state.striker = updatedStriker(state.striker, run);
};

export const bowlerStatsHelper = (state, action) => {
  const { run } = action.payload;
  state.bowler = {
    ...state.bowler,
    [run]: state.bowler[run] + 1,
    totalRun: state.bowler.totalRun + run,
    economy:
      (state.bowler.totalRun + run / state.bowler.overs.length).toFixed(1) || 0,
  };
};

export const bowlDetailsHelper = (state, action) => {
  const {
    deliveryType,
    run = 0,
    dismissalType = null,
    dismissedBatsman = null,
    comment = "",
  } = action.payload;

  state.currentOver = {
    ...state.currentOver,
    totalRun: state.currentOver.totalRun + run,
    bowls: [
      ...state.currentOver.bowls,
      {
        comment,
        deliveryType,
        striker: { name: state.striker.name },
        nonStriker: { name: state.nonStriker.name },
        dismissalType,
        dismissedBatsman,
        run: deliveryType === UTILS.DELIVERY_STATUS.WIDE ? 1 : run,
      },
    ],
  };
  if (deliveryType !== UTILS.DELIVERY_STATUS.VALID) {
    const ex = state.currentOver.extras + run;
    state.currentOver.extras = ex;
  }

  if (deliveryType == UTILS.DELIVERY_STATUS.BOUNCER) {
    state.currentOver.bouncer += 1;
  }
};
