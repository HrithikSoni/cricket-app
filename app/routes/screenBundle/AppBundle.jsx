import { NAV_SCREENS } from "../../utils/constants/screenNames";
import BottomTabNavigator from "../BottomTabNavigator";
import matchesBundle from "./MatchesBundle";
import tournamentBundle from "./TournamentMatchesBundle";

const appBundle = [
  {
    name: NAV_SCREENS.BOTTOM_TAB_NAVIGATOR,
    Component: BottomTabNavigator,
  },
  ...tournamentBundle,
  ...matchesBundle,
];

export default appBundle;
