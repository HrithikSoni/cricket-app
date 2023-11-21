import Login from "../../screens/AuthScreens/Login";

const LOGIN = {
  name: "Login",
  Component: Login,
};
const SIGN_UP = {
  NAME: "",
};

export const AUTH_SCREEN = {
  LOGIN: LOGIN.name,
};

const authBundle = [LOGIN, SIGN_UP];

export default authBundle;
