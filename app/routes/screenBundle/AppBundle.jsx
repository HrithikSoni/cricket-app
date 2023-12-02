import teamsBundle from "../../screens/TeamsScreens";
import { NAV_SCREENS } from "../../utils/constants/screenNames";
import BottomTabNavigator from "../BottomTabNavigator";
import matchesBundle from "./MatchesBundle";
import tournamentBundle from "./TournamentMatchesBundle";
import scoringScreenBundle from "../../screens/ScoringScreens/index"

const appBundle = [
  {
    name: NAV_SCREENS.BOTTOM_TAB_NAVIGATOR,
    component: BottomTabNavigator,
  },
  ...tournamentBundle,
  ...matchesBundle,
  ...teamsBundle,
  ...scoringScreenBundle
];

export default appBundle;
