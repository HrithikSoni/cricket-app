import UTILS from "../../utils";

import LiveMatch from "./LiveMatch";
import UpComingMatches from "./UpComingMatches";

const { LIVE_MATCHES } = UTILS.SCREEN_NAMES;

const liveMatches = [
  { name: LIVE_MATCHES.UPCOMING_MATCHES, component: UpComingMatches },
  { name: LIVE_MATCHES.LIVE_MATCH, component: LiveMatch },
];

export default liveMatches;
