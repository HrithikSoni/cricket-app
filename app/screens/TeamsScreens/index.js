import UTILS from "../../utils";
import AddPlayersInTeam from "./AddPlayersInTeam";
import CreateTeam from "./CreateTeam";
import SearchPlayer from "./SearchPlayer";
import SelectTeam from "./SelectTeam";
import TeamsVersus from "./TeamsVersus";

const { TEAMS } = UTILS.SCREEN_NAMES;

const teamsBundle = [
  { name: TEAMS.ADD_PLAYERS_IN_TEAM, component: AddPlayersInTeam },
  {
    name: TEAMS.CREATE_TEAM,
    component: CreateTeam,
    // options: { presentation: "modal" },
  },
  { name: TEAMS.SEARCH_PLAYER, component: SearchPlayer },
  { name: TEAMS.SELECT_TEAM, component: SelectTeam },
  { name: TEAMS.TEAMS_VERSUS, component: TeamsVersus },
];

export default teamsBundle;
