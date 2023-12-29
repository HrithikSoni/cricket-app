import { useDispatch, useSelector } from "react-redux";
import {
  handleAddScore,
  handleAssignBowler,
  handleCurrentOver,
  handleDismissBatsman,
  handleResetCurrentOver,
  handleUpdateBatsmanStat,
  handleUpdateBowlerStat,
  rotateStrike,
  updateScorecardDetails,
  validDelivery,
} from "./scoringReducer";
import { store } from "../store";
import UTILS from "../../utils";

const { DISMISS_TYPES, DELIVERY_STATUS } = UTILS;

export function useScoreDetails() {
  const {
    currentScore,
    wickets,
    totalBalls,
    striker,
    nonStriker,
    playingBatsman,
    bowler,
    playingFielders,
  } = useSelector((state) => state.scoring);
  const overs = Math.floor(totalBalls / 6);
  const ballsInCurrentOver = totalBalls % 6;
  const bowlerStat = playingFielders.find((i) => i.id == bowler.id);

  return {
    currentScore,
    wickets,
    overs,
    ballsInCurrentOver,
    striker: striker,
    nonStriker: nonStriker,
    playingBatsman,
    bowler,
    bowlerStat,
    playingFielders,
  };
}

export function useAddScore() {
  // const dispatch = useDispatch();
  return function (action) {
    // handle not wide condition
    if (action.type !== "wide") {
      store.dispatch(validDelivery());
      store.dispatch(handleUpdateBatsmanStat(action));
      store.dispatch(handleUpdateBowlerStat(action));
    }
    store.dispatch(handleAddScore(action.run));
    if (action.run == 1 || action.run == 3 || action.run == 5) {
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

export function useAssignBowler() {
  const dispatch = useDispatch();
  return function (bowlerId) {
    dispatch(handleAssignBowler({ bowlerId }));
  };
}

export function useCurrentOverDetailsSelector() {
  return useSelector((state) => state.scoring.currentOver);
}

export function useDispatchResetCurrentOver() {
  return function () {
    store.dispatch(handleResetCurrentOver());
  };
}

function handleUpdateCurrentOver(body) {
  store.dispatch(handleCurrentOver(body));
}

function incrementValidDeliveries() {
  store.dispatch(validDelivery());
}

export function useScoreEngine() {
  function dispatchBowlDetails(bowlDetails) {
    const { batsman, dismissalType, run, type } = bowlDetails;

    if (type == DELIVERY_STATUS.VALID) {
      incrementValidDeliveries();
    }

    // update current delivery stat ()
    if (dismissalType !== DISMISS_TYPES.TIMED_OUT) {
      handleUpdateCurrentOver({
        run,
        wicket: !!dismissalType,
        type,
      });
    }

    // Check for various scenarios and update corresponding stats
    if (type == DELIVERY_STATUS.WIDE) {
      // Increment wide count in bowler's stats
      // update total team score
    }

    if (type == DELIVERY_STATUS.NO_BALL) {
      // Increment no-ball count in bowler's stats
    }

    if (run !== null) {
      // Update boundary count for the batsman
    }

    if (dismissalType !== null) {
      // Update dismissal count in the match
      // Specific dismissal type (e.g., "Bowled", "Caught", etc.)

      if (dismissalType !== "Run Out") {
        if (batsman === "Striker") {
          // Update striker's dismissal count
        } else {
          // Update non-striker's dismissal count
        }
      }
    }
  }

  return { dispatchBowlDetails };
}
