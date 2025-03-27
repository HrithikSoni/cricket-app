import MatchDetails from "./MatchDetails";
import UTILS from "../../utils";

const { MATCH_DETAILS_SCREENS } = UTILS.SCREEN_NAMES;

const matchesBundle = [
  { name: MATCH_DETAILS_SCREENS.FORM, component: MatchDetails },
];

export default matchesBundle;
