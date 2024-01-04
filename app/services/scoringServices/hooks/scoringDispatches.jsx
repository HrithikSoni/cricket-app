import { store } from "../../store";
import {
  assignBatsman,
  handleAssignBowler,
  handleDismissBatsman,
  handleResetCurrentOver,
} from "../scoringReducer";

export function useDispatchResetCurrentOver() {
  return function () {
    store.dispatch(handleResetCurrentOver());
  };
}

export function useAssignBowler() {
  return function (bowlerId) {
    store.dispatch(handleAssignBowler({ bowlerId }));
  };
}

export function useDismissBatsman() {
  return function (data) {
    store.dispatch(handleDismissBatsman(data));
  };
}

/// updates
export function useAssignStrikerNonStriker() {
  return function ({ strikerId = null, nonStrikerId = null }) {
    if (strikerId) {
      store.dispatch(assignBatsman({ id: strikerId, strikeType: "striker" }));
    }
    if (nonStrikerId) {
      store.dispatch(
        assignBatsman({ id: nonStrikerId, strikeType: "nonStriker" })
      );
    }
  };
}
