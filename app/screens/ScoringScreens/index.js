import { View } from "react-native";
import TopTabNavigator from "../../routes/others/TopTabNavigator";
import UTILS from "../../utils";
import LiveMatch from "../LiveMatchesScreen/LiveMatch";
import MatchToss from "./MatchToss";
import Scoring from "./Scoring";
import ChooseInitialPlayers from "./ChooseInitialPlayers";
import MatchStats from "./MatchStats";

const { SCORING_SCREENS } = UTILS.SCREEN_NAMES;

const scoringScreensBundle = [
  { name: SCORING_SCREENS.MATCH_TOSS, component: MatchToss },
  { name: SCORING_SCREENS.CHOOSE_PLAYERS, component: ChooseInitialPlayers },
  { name: SCORING_SCREENS.SCORING, component: Scoring },
  { name: SCORING_SCREENS.MATCH_STATS, component: MatchStats },
  // { name: SCORING_SCREENS.LIVE_MATCH, component: LiveMatch },
];

export default scoringScreensBundle;
