import UTILS from "../../../utils";

export const assignBatsmanHelper = (state, action) => {
  const { id: playerId, strikeType } = action.payload;
  const p = state.playingBatsman.find((i) => i.id == playerId);
  state.playingBatsman = state.playingBatsman.map((i) =>
    i.id == playerId ? { ...i, status: UTILS.PLAYING_STATUS.PLAYING } : i
  );
  state[strikeType] = p;
  // state.batsmen.push(p);
};

export const dismissBatsmanHelper = (state, action) => {
  //  $$$$$$$$ handle case for all out
  state.batsmen.push(state[action.payload.batsman]);

  // remove current batsman striker or nonstriker
};

export const handleAssignBowlerHelper = (state, action) => {
  const { bowlerId } = action.payload;

  if (state.bowler) {
    // update bowlers
    const existingIndex = state.bowlers.findIndex(
      (item) => item.id === state.bowler.id
    );

    if (existingIndex !== -1) {
      state.bowlers[existingIndex] = {
        ...state.bowlers[existingIndex],
        ...state.bowler,
      };
    } else {
      state.bowlers.push(state.bowler);
    }
  }

  let newBowler = null;

  newBowler = state.bowlers.find((i) => i.id == bowlerId);

  if (!newBowler) {
    newBowler = state.playingFielders.find((i) => i.id == bowlerId);
  }

  state.playingFielders = state.playingFielders.map((i) =>
    i.id == newBowler.id
      ? { ...i, overs: [...i.overs, Math.floor(state.totalBalls / 6) + 1] }
      : i
  );

  state.currentOver = { ...state.currentOver, bowlerId: newBowler.id };
  state.bowler = newBowler;
};
