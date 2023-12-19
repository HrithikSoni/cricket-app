import { useDispatch, useSelector } from "react-redux";
import {
  allPlayers,
  assign,
  changeOrder,
  getCaptain,
  getWicketKeeper,
  getCurrentTeam,
  totalPlayer,
  handleMatchDetails,
  updateCurrenTeam,
  setCurrentTeamDetails,
} from "./teamReducer";

const nullFunction = () => null;

export default function useManageTeam(
  selectCurrentTeam = true,
  selectTeamMembers = true,
  selectTotalPlayers = true,
  selectCaptain = true,
  selectWicketKeeper = true
) {
  const dispatch = useDispatch();

  const currentTeam = useSelector(
    selectCurrentTeam ? getCurrentTeam : nullFunction
  );

  const teamMembers = useSelector(allPlayers);
  const totalPlayers = useSelector(totalPlayer);
  const captain = useSelector(getCaptain);
  const wicketKeeper = useSelector(getWicketKeeper);

  function isPlayerInTeam(id) {
    const filter = teamMembers.filter((i) => i.id == id);
    return filter.length > 0;
  }

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

  function assignCaptain(user) {
    dispatch(
      assign({
        captain: user,
      })
    );
  }

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

  function addMatchDetails(details) {
    dispatch(handleMatchDetails(details));
  }

  return {
    currentTeam,
    dispatch,
    teamMembers,
    isPlayerInTeam,
    totalPlayers,
    moveUp,
    moveDown,
    assignCaptain,
    assignWicketKeeper,
    captainWicketKeeper: {
      captain,
      wicketKeeper,
    },
    addMatchDetails,
  };
}

export function useCurrentTeamSelector() {
  return useSelector(getCurrentTeam);
}

export function useCurrentTeamDetailsSelector() {
  return useSelector((state) => state.team[state.team.currentTeam].teamDetails);
}

export function useUpdateCurrentTeamDetails() {
  const dispatch = useDispatch();
  return function (data) {
    dispatch(setCurrentTeamDetails(data));
  };
}
