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
} from "../services/store/reducers/matchReduce";

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

  function handleUpdateCurrentTeam(team) {
    dispatch(updateCurrenTeam(team));
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
    handleUpdateCurrentTeam,
  };
}
