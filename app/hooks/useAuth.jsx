import { useDispatch, useSelector } from "react-redux";
import { logoutUser, updateAuth } from "../services/store/reducers/authReducer";

export default useAuth = () => {
  const { auth, role, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const setAuth = (body) => dispatch(updateAuth(body));
  const logout = () => dispatch(logoutUser());

  let userFirstName = null;

  if (auth) {
    userFirstName = auth?.data?.firstName;
  }
  return {
    auth,
    logout,
    role,
    setAuth,
    token,
    userFirstName,
  };
};
