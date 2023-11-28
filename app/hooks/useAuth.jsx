import { useDispatch, useSelector } from "react-redux";

export default useAuth = () => {
  const { auth, subscribed } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const setAuth = (body) => dispatch(updateAuth(body));
  const logout = () => dispatch(logoutUser());

  let role = null;
  let token = null;
  let userFirstName = null;

  if (auth) {
    role = auth?.data?.role;
    token = auth?.token;
    userFirstName = auth?.data?.firstName
  }
  return {
    auth,
    logout,
    role,
    setAuth,
    subscribed,
    token,
    userFirstName
  };
};
