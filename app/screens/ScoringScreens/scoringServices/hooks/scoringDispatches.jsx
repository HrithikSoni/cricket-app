import { store } from "../../../../services/store";
import {
  assignBatsman,
  handleAssignBowler,
  handleDismissBatsman,
  handleResetCurrentOver,
  updatePlayingEleven,
  updateBallsPerInning,
} from "../scoringReducer";

export function useDispatchResetCurrentOver() {
  return function () {
    store.dispatch(handleResetCurrentOver());
  };
}

export function useUpdateBallsPerInningDispatch() {
  return function (details) {
    store.dispatch(updateBallsPerInning(details));
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

export function useUpdateTeams() {
  return function ({ battingTeam, fieldingTeam }) {
    store.dispatch(updatePlayingEleven({ battingTeam, fieldingTeam }));
  };
}
