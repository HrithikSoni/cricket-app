import CreateTournament from "../../screens/TournamentScreens/CreateTournament";
import TournamentMatches from "../../screens/TournamentScreens/TournamentMatches";
import UTILS from "../../utils";

const { TOURNAMENT_SCREENS } = UTILS.SCREEN_NAMES;

const tournamentBundle = [
  { name: TOURNAMENT_SCREENS.CREATE_TOURNAMENT, component: CreateTournament },
  { name: TOURNAMENT_SCREENS.TOURNAMENT_MATCHES, component: TournamentMatches },
];

export default tournamentBundle;
