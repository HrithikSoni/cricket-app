import UTILS from "../../utils";
import { store } from "../store";
import {
  handleAddScore,
  handleCurrentOver,
  handleUpdateBatsmanStat,
  handleUpdateBowlerStat,
  rotateStrike,
  validDelivery,
} from "./scoringReducer";

const { DISMISS_TYPES, DELIVERY_STATUS } = UTILS;

export function useScoreEngine() {
  function dispatchBowlDetails(bowlDetails) {
    const { batsman, dismissalType, run, type } = bowlDetails;

    if (type === DELIVERY_STATUS.VALID) {
    }

    if (type === DELIVERY_STATUS.WIDE) {
      store.dispatch(handleAddScore(1));
    }

    if (type == DELIVERY_STATUS.VALID) {
      store.dispatch(validDelivery());
      store.dispatch(handleUpdateBatsmanStat({ run }));
      store.dispatch(handleUpdateBowlerStat({ run }));
    }

    // update current delivery stat ()
    if (dismissalType !== DISMISS_TYPES.TIMED_OUT) {
      store.dispatch(
        handleCurrentOver({
          run,
          wicket: !!dismissalType,
          type,
        })
      );
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
      store.dispatch(handleAddScore(bowlDetails.run));
      // Update boundary count for the batsman
      if (run == 1 || run == 3 || run == 5) {
        store.dispatch(rotateStrike());
      }
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
