import { useDispatch, useSelector } from "react-redux";
import {
  handleAddScore,
  handleDismissBatsman,
  handleUpdateBatsmanScore,
  rotateStrike,
  updateScorecardDetails,
  validDelivery,
} from "./scoringReducer";
import { store } from "../store";

export function useScoreDetails() {
  const {
    currentScore,
    wickets,
    totalBalls,
    striker,
    nonStriker,
    playingBatsman,
  } = useSelector((state) => state.scoring);
  const overs = Math.floor(totalBalls / 6);
  const ballsInCurrentOver = totalBalls % 6;

  return {
    currentScore,
    wickets,
    overs,
    ballsInCurrentOver,
    striker: striker,
    nonStriker: nonStriker,
    playingBatsman,
  };
}

export function useAddScore() {
  // const dispatch = useDispatch();
  return function (action) {
    // handle not wide condition
    if (action.type !== "wide") {
      store.dispatch(validDelivery());
      store.dispatch(handleUpdateBatsmanScore(action));
    }
    store.dispatch(handleAddScore(action.value));
    if (action.value == 1 || action.value == 3 || action.value == 5) {
      store.dispatch(rotateStrike());
    }
  };
}

export function useUpdateScorecardDetails() {
  const dispatch = useDispatch();
  return function (data) {
    dispatch(updateScorecardDetails(data));
  };
}

export function useDismissBatsman() {
  const dispatch = useDispatch();
  return function (type) {
    dispatch(handleDismissBatsman({ type }));
  };
}
