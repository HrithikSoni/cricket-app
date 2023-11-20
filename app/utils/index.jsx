import handlePlatform from "./helpers/handlePlatform";
import INPUT_TYPE from "./constants/inputType";
import colors from './styles/colors'
import { commonStyle } from "./styles/globalStyles";

const HELPERS = {
  handlePlatform,
};

const STYLES = {
  colors,
  commonStyle
}

const UTILS = {
  HELPERS,
  INPUT_TYPE,
  STYLES
};

export default UTILS;
