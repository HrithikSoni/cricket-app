import MatchDetails from "../../screens/MatchScreens/MatchDetails";
import UTILS from "../../utils";

const { MATCH_DETAILS_SCREENS } = UTILS.SCREEN_NAMES;

const matchesBundle = [
  { name: MATCH_DETAILS_SCREENS.FORM, Component: MatchDetails },
];

export default matchesBundle;
