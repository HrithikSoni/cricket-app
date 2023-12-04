import Login from "../../screens/AuthScreens/Login";
import OnBoarding from "../../screens/AuthScreens/OnBoarding";
import Otp from "../../screens/AuthScreens/Otp";
import Signup from "../../screens/AuthScreens/Signup";
import TestLogin from "../../screens/TestScreens/TestLogin";
import UTILS from "../../utils";

const { AUTH_SCREENS, TEST_SCREENS } = UTILS.SCREEN_NAMES

const ON_BOARDING = {
  name: AUTH_SCREENS.ON_BOARDING,
  Component: OnBoarding,
};

const LOGIN = {
  name: AUTH_SCREENS.LOGIN,
  Component: Login,
};

const SIGN_UP = {
  name: AUTH_SCREENS.SIGNUP,
  Component: Signup,
};

export const OTP = {
  name: AUTH_SCREENS.OTP,
  Component: Otp,
};

export const TEST_LOGIN = {
  name: TEST_SCREENS.TEST_LOGIN,
  Component: TestLogin
}

const authBundle = [ON_BOARDING, LOGIN, SIGN_UP, OTP];
const testAuthScreensBundle = [ON_BOARDING, TEST_LOGIN]

export default {authBundle, testAuthScreensBundle};
