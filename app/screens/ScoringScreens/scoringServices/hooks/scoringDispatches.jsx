import { store } from "../../../../services/store";
import {
  assignBatsman,
  handleAssignBowler,
  handleDismissBatsman,
  handleResetCurrentOver,
  updatePlayingEleven,
  updateBallsPerInning,
  updateTeamsDetails,
  updateScoringMatchDetails,
  updateScoringDetails,
} from "../scoringReducer";

export default function useUpdateScoringDetails() {
  return function (payload) {
    store.dispatch(updateScoringDetails(payload));
  };
}

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

export function useAddTeamDetails() {
  return function (battingTeam, bowlingTeam) {
    store.dispatch(updateTeamsDetails({ battingTeam, bowlingTeam }));
  };
}

export function useAddScoringMatchDetails() {
  return function (matchDetails) {
    store.dispatch(updateScoringMatchDetails(matchDetails));
  };
}
