import CONFIG from "./configs";
import COUNTRIES from "./constants/country";
import SCREEN_NAMES from "./constants/screenNames";
import countryInfo from "./constants/selctedCountry";
import { BATSMAN, DELIVERY_STATUS, DISMISS_TYPES } from "./enum/deliveryStatus";
import HTTPS_METHODS from "./enum/httpMethods";
import INPUT_TYPE from "./enum/inputType";
import MATCH_STATUS from "./enum/matchStatus";
import MATCH_TYPES from "./enum/matchTypes";
import { FIELDING_STATUS, PLAYING_STATUS } from "./enum/playingStatus";
import ROLE from "./enum/role";
import TEAM_NAME from "./enum/teamName";
import ToastType from "./enum/toastTypes";
import DIMENSIONS from "./helpers/dimensions";
import oversByMatchType from "./helpers/getOversByMatchType";
import handlePlatform from "./helpers/handlePlatform";
import colors from "./styles/colors";
import STYLES from "./styles/globalStyles";
import INNING_TYPES from "./enum/inningTypes";

const HELPERS = {
  handlePlatform,
  oversByMatchType,
};

const UTILS = {
  COLORS: colors,
  HELPERS,
  INPUT_TYPE,
  STYLES,
  COUNTRIES,
  COUNTRY_INFO: countryInfo,
  ROLE,
  HTTPS_METHODS,
  DIMENSIONS,
  TOAST_TYPE: ToastType,
  SCREEN_NAMES,
  TEAM_NAME,
  MATCH_TYPES,
  CONFIG,
  DELIVERY_STATUS,
  DISMISS_TYPES,
  BATSMAN,
  FIELDING_STATUS,
  PLAYING_STATUS,
  MATCH_STATUS,
  INNING_TYPES,
};

export default UTILS;
