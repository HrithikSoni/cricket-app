import { useDispatch, useSelector } from "react-redux";

export default useAuth = () => {
  const { auth, subscribed } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const setAuth = (body) => dispatch(updateAuth(body));
  const logout = () => dispatch(logoutUser());

  let role = null;
  let token = null;
  if (auth) {
    role = typeof auth.role === "string" ? auth.role : auth.role.name;

    token = auth.token;
  }
  return {
    auth,
    logout,
    role,
    setAuth,
    subscribed,
    token,
  };
};
