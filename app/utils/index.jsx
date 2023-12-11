import STYLES from "./styles/globalStyles";
import COUNTRIES from "./constants/country";
import handlePlatform from "./helpers/handlePlatform";
import HTTPS_METHODS from "./enum/httpMethods";
import INPUT_TYPE from "./enum/inputType";
import ToastType from "./enum/toastTypes";
import ROLE from "./enum/role";
import colors from "./styles/colors";
import DIMENSIONS from "./helpers/dimensions";
import SCREEN_NAMES from "./constants/screenNames";
import countryInfo from "./constants/selctedCountry";
import TEAM_NAME from "./enum/teamName";
import MATCH_TYPES from "./enum/matchTypes";
import COMPONENT_NAMES from "./constants/componentNames";

const HELPERS = {
  handlePlatform,
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
  COMPONENT_NAMES,
  TEAM_NAME,
  MATCH_TYPES,
};

export default UTILS;
