import handlePlatform from "./helpers/handlePlatform";
import INPUT_TYPE from "./constants/inputType";
import colors from "./styles/colors";
import { commonStyle, commonTextStyle, rowCenter, rowSpaceBtw } from "./styles/globalStyles";
import COUNTRIES from "./constants/country";
import { ROLE } from "./constants/entity";

const HELPERS = {
  handlePlatform,
};

const STYLES = {
  colors,
  commonStyle,
  commonTextStyle,
  rowCenter,
  rowSpaceBtw
};

const CONSTANTS = {
  ROLE
}

const UTILS = {
  HELPERS,
  INPUT_TYPE,
  STYLES,
  COUNTRIES,
  CONSTANTS
};

export default UTILS;
