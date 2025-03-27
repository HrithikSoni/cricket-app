import { useDispatch, useSelector } from "react-redux";
import {
  addMatchDetails,
  addPlayerInTeam,
  assign,
  changeOrder,
  getCurrentTeam,
  setCurrentTeamDetails,
  updateCurrenTeam,
} from "./teamReducer";

// selectors ------------------------------
export function useTeamSelector() {
  return useSelector((state) => state.team);
}

export function useAllCurrentTeamPlayers() {
  return useSelector((state) => state.team[state.team.currentTeam].players);
}

export function useCurrentTeamDetailsSelector() {
  return useSelector((state) => state.team[state.team.currentTeam].teamDetails);
}

export function useTotalPlayerInCurrentTeamSelector() {
  return useSelector(
    (state) => state.team[state.team.currentTeam].players.length
  );
}

export function useCaptainWicketKeeperSelector() {
  const captain = useSelector(
    (state) => state.team[state.team.currentTeam].captain
  );
  const wicketKeeper = useSelector(
    (state) => state.team[state.team.currentTeam].wicketKeeper
  );
  return { captain, wicketKeeper };
}

export function useTeamDetailsSelector() {
  return useSelector((state) => state.team);
}

// dispatches ------------------------------

export function useAddPlayerInCurrentTeam() {
  const dispatch = useDispatch();
  return function (data) {
    dispatch(addPlayerInTeam(data));
  };
}

export function useUpdateCurrentTeamDetails() {
  const dispatch = useDispatch();
  return function (data) {
    dispatch(setCurrentTeamDetails(data));
  };
}

export function useMoveUpDown() {
  const dispatch = useDispatch();

  const totalPlayers = useTotalPlayerInCurrentTeamSelector();

  function moveUp(index) {
    if (index == 0) return;
    dispatch(
      changeOrder({
        index,
        upDown: -1,
      })
    );
  }

  function moveDown(index) {
    if (index == totalPlayers - 1) return;
    dispatch(
      changeOrder({
        index,
        upDown: 1,
      })
    );
  }
  return { moveDown, moveUp };
}

export function useAssignCaptainWicketKeeper() {
  const dispatch = useDispatch();

  function assignCaptain(user) {
    dispatch(
      assign({
        captain: user,
      })
    );
  }

  function assignWicketKeeper(user) {
    dispatch(
      assign({
        wicketKeeper: user,
      })
    );
  }
  return { assignCaptain, assignWicketKeeper };
}

export function useUpdateCurrentTeamKey() {
  const dispatch = useDispatch();
  return function (team) {
    dispatch(updateCurrenTeam(team));
  };
}

/// add match details to store when match is created
export function useAddMatchDetails() {
  const dispatch = useDispatch();
  return function (matchDetails) {
    dispatch(addMatchDetails(matchDetails));
  };
}
