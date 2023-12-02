import { useDispatch, useSelector } from "react-redux";
import {
  allPlayers,
  assign,
  changeOrder,
  getCaptain,
  getWicketKeeper,
  getCurrentTeam,
  totalPlayer,
} from "../services/store/reducers/matchReduce";

export default function useManageTeam() {
  const dispatch = useDispatch();

  const currentTeam = useSelector(getCurrentTeam);

  const teamMembers = useSelector(allPlayers(currentTeam));
  const totalPlayers = useSelector(totalPlayer(currentTeam));

  const captain = useSelector(getCaptain(currentTeam));
  const wicketKeeper = useSelector(getWicketKeeper(currentTeam));

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
  };
}
