import { useDispatch } from "react-redux";
import {
  handleAddScore,
  handleCurrentOverDetails,
  handleUpdateBatsmanStat,
  handleUpdateBowlerStat,
  rotateStrike,
  validDelivery,
} from "./scoringReducer";
import UTILS from "../../../utils";

const { DISMISS_TYPES, DELIVERY_STATUS } = UTILS;

export default function useScoreEngine() {
  const dispatch = useDispatch();

  function dispatchBowlDetails(bowlDetails) {
    const { batsman, dismissalType, run, type } = bowlDetails;

    // update bowl details
    dispatch(
      handleCurrentOverDetails({
        deliveryType: type,
        run,
        dismissalType: null,
        dismissedBatsman: null,
        comment: "",
      })
    );

    if (dismissalType == DISMISS_TYPES.TIMED_OUT) {
      // $$$$$$$$$$$$$$ batsman timed out
      return;
    }

    if (type == DELIVERY_STATUS.VALID) {
      dispatch(validDelivery());
      if (dismissalType) {
        ///$$$$$$$$$$ handle case of batsman dismiss
      } else {
        dispatch(handleUpdateBatsmanStat({ run }));
        dispatch(handleUpdateBowlerStat({ run }));
      }
      if (run == 1 || run == 3 || run == 5) {
        dispatch(rotateStrike());
      }
      dispatch(handleAddScore(run)); /// add runs in total score board
    } else {
      // invalid ball details

      if (type === DELIVERY_STATUS.WIDE) {
        dispatch(handleAddScore(1));
        // update current bowler extra and total runs

        // update overall extra
      }

      if (type === DELIVERY_STATUS.NO_BALL) {
        // $$$$$ handle run out
        // $$$$$ handle obstruction fielding
      }

      if (type === DELIVERY_STATUS.BYES) {
        // dispatch(handleAddScore(1));
      }
      if (type === DELIVERY_STATUS.LEG_BYES) {
        // dispatch(handleAddScore(1));
      }

      if (type === DELIVERY_STATUS.DEAD_BALL) {
        // dispatch(handleAddScore(1));
      }
    }
  }

  return { dispatchBowlDetails };
}
