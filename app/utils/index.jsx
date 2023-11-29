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

const HELPERS = {
  handlePlatform,
};

const UTILS = {
  COLORS: colors,
  HELPERS,
  INPUT_TYPE,
  STYLES,
  COUNTRIES,
  ROLE,
  HTTPS_METHODS,
  DIMENSIONS,
  TOAST_TYPE: ToastType,
  SCREEN_NAMES,
};

export default UTILS;
