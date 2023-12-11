import teamsBundle from "../../screens/TeamsScreens";
import BottomTabNavigator from "../BottomTabNavigator";
import matchesBundle from "./MatchesBundle";
import tournamentBundle from "./TournamentMatchesBundle";
import scoringScreenBundle from "../../screens/ScoringScreens/index";
import UTILS from "../../utils";
import TopTabNavigator from "../TopTabNavigator";

const { NAV_SCREENS } = UTILS.SCREEN_NAMES;

const appBundle = [
  {
    name: NAV_SCREENS.BOTTOM_TAB_NAVIGATOR,
    component: BottomTabNavigator,
  },
  ...tournamentBundle,
  ...matchesBundle,
  ...teamsBundle,
  ...scoringScreenBundle,
];

export default appBundle;
