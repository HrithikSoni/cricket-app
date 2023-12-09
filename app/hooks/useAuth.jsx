import { useDispatch, useSelector } from "react-redux";
import { logoutUser, updateAuth } from "../services/authServices/authReducer";

export default useAuth = () => {
  const { auth, role, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const setAuth = (body) => dispatch(updateAuth(body));
  const logout = () => dispatch(logoutUser());

  return {
    auth,
    logout,
    role,
    setAuth,
    token,
  };
};
