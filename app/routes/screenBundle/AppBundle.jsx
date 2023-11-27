import { NAV_SCREENS } from "../../utils/constants/screenNames";
import BottomTabNavigator from "../BottomTabNavigator";

export const BOTTOM_TAB_NAVIGATOR = {
    name: NAV_SCREENS.BOTTOM_TAB_NAVIGATOR,
    Component: BottomTabNavigator
}

const appBundle = [BOTTOM_TAB_NAVIGATOR]

export default appBundle;