import UTILS from "../../utils";
import ManageTeam from "./ManageTeam";
import CreateTeam from "./CreateTeam";
import SearchPlayer from "./SearchPlayer";
import SelectTeam from "./SelectTeam";
import TeamsVersus from "./TeamsVersus";
import ManageBattingOrder from "./ManageBattingOrder";
import SelectCaptain from "./SelectCaptain";
import SelectWicketKeeper from "./SelectWicketKeeper";

const { TEAMS } = UTILS.SCREEN_NAMES;

const teamsBundle = [
  { name: TEAMS.MANAGE_TEAM, component: ManageTeam },
  {
    name: TEAMS.CREATE_TEAM,
    component: CreateTeam,
  },
  { name: TEAMS.SEARCH_PLAYER, component: SearchPlayer },
  { name: TEAMS.SELECT_TEAM, component: SelectTeam },
  { name: TEAMS.TEAMS_VERSUS, component: TeamsVersus },
  { name: TEAMS.MANAGE_BATTING_ORDER, component: ManageBattingOrder },
  { name: TEAMS.SELECT_CAPTAIN, component: SelectCaptain },
  { name: TEAMS.SELECT_WICKET_KEEPER, component: SelectWicketKeeper },
];

export default teamsBundle;
