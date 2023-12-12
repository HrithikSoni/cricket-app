import BottomTabNavigator from "../routes/others/BottomTabNavigator";
import UTILS from "../utils";
import liveMatches from "./LiveMatchesScreen";
import matchesBundle from "./MatchScreens";
import scoringScreenBundle from "./ScoringScreens/index";
import teamsBundle from "./TeamsScreens";
import tournamentBundle from "./TournamentScreens/TournamentMatchesBundle";

const { NAV_SCREENS } = UTILS.SCREEN_NAMES;

const adminScreens = [
  {
    name: NAV_SCREENS.BOTTOM_TAB_NAVIGATOR,
    component: BottomTabNavigator,
  },
  ...tournamentBundle,
  ...matchesBundle,
  ...teamsBundle,
  ...scoringScreenBundle,
  ...liveMatches,
];

export default adminScreens;
