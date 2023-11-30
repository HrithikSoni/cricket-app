import Login from "../../screens/AuthScreens/Login";
import OnBoarding from "../../screens/AuthScreens/OnBoarding";
import Otp from "../../screens/AuthScreens/Otp";
import Signup from "../../screens/AuthScreens/Signup";

const ON_BOARDING = {
  name: "OnBoarding",
  component: OnBoarding,
};

const LOGIN = {
  name: "Login",
  component: Login,
};

const SIGN_UP = {
  name: "Signup",
  component: Signup,
};

export const OTP = {
  name: "Otp",
  component: Otp,
};

const authBundle = [ON_BOARDING, LOGIN, SIGN_UP, OTP];

export default authBundle;
