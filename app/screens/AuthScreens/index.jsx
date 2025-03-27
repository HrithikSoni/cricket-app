import Login from "./Login";
import OnBoarding from "./OnBoarding";
import Otp from "./Otp";
import Signup from "./Signup";
import TestLogin from "./TestLogin";
import UTILS from "../../utils";

const { AUTH_SCREENS, TEST_SCREENS } = UTILS.SCREEN_NAMES;

const AuthScreens = [
  {
    name: AUTH_SCREENS.ON_BOARDING,
    component: OnBoarding,
  },
  {
    name: AUTH_SCREENS.LOGIN,
    component: Login,
  },
  {
    name: AUTH_SCREENS.SIGNUP,
    component: Signup,
  },
  {
    name: AUTH_SCREENS.OTP,
    component: Otp,
  },
  {
    name: TEST_SCREENS.TEST_LOGIN,
    component: TestLogin,
  },
];

export default AuthScreens;
