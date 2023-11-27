import {
  commonStyle,
  commonTextStyle,
  rowCenter,
  rowSpaceBtw,
} from "./styles/globalStyles";
import colors from "./styles/colors";
import COUNTRIES from "./constants/country";
import handlePlatform from "./helpers/handlePlatform";
import HTTPS_METHODS from "./enum/httpMethods";
import INPUT_TYPE from "./enum/inputType";
import ToastType from "./enum/toastTypes";
import ROLE from './enum/role'

const HELPERS = {
  handlePlatform,
};

const STYLES = {
  colors,
  commonStyle,
  commonTextStyle,
  rowCenter,
  rowSpaceBtw,
};


const UTILS = {
  HELPERS,
  INPUT_TYPE,
  STYLES,
  COUNTRIES,
  ROLE,
  HTTPS_METHODS,
  TOAST_TYPE: ToastType,
};

export default UTILS;
