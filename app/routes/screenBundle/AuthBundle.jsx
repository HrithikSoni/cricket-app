import Login from "../../screens/AuthScreens/Login";
import OnBoarding from "../../screens/AuthScreens/OnBoarding";
import Otp from "../../screens/AuthScreens/Otp";
import Signup from "../../screens/AuthScreens/Signup";


const ON_BOARDING = {
  name: "OnBoarding",
  Component: OnBoarding
}

const LOGIN = {
  name: "Login",
  Component: Login,
};

const SIGN_UP = {
  name: 'Signup',
  Component: Signup
};

const OTP = {
  name: 'Otp',
  Component: Otp
}

export const AUTH_SCREEN = {
  ONBOARDING: ON_BOARDING.name,
  LOGIN: LOGIN.name,
  SIGNUP: SIGN_UP.name,
  OTP: OTP.name
};

const authBundle = [ON_BOARDING,LOGIN, SIGN_UP, OTP];

export default authBundle;
