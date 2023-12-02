import UTILS from "../../utils";
import MatchToss from "./MatchToss";

const { SCORING_SCREENS } = UTILS.SCREEN_NAMES

const scoringScreensBundle = [
    {name: SCORING_SCREENS.MATCH_TOSS, component: MatchToss}
]

export default scoringScreensBundle;