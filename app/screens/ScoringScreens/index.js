import { View } from "react-native";
import TopTabNavigator from "../../routes/TopTabNavigator";
import UTILS from "../../utils";
import LiveMatch from "./LiveMatch";
import MatchToss from "./MatchToss";

const { SCORING_SCREENS } = UTILS.SCREEN_NAMES;

const scoringScreensBundle = [
  { name: SCORING_SCREENS.MATCH_TOSS, component: MatchToss },
  { name: SCORING_SCREENS.LIVE_MATCH, component: LiveMatch },
];

export default scoringScreensBundle;
