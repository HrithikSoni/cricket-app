import { useDispatch, useSelector } from "react-redux";
import { logoutUser, updateAuth } from "../services/authServices/authReducer";
import { useEffect } from "react";
import permanentStorage from "../services/store/permanentStorage";
import UTILS from "../utils";

function useAuth() {
  const { auth, role, token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const setAuth = (body) => {
    dispatch(updateAuth(body));
  };

  const saveUserData = (body) => {
    dispatch(updateAuth(body));
    permanentStorage.saveDetails(permanentStorage.userDetail, body);
  };

  const deleteUserData = async () => {
    dispatch(logoutUser());
    await permanentStorage.deleteDetails(permanentStorage.userDetail);
  };

  return {
    auth,
    deleteUserData,
    role,
    saveUserData,
    setAuth,
    token,
    isAdmin: role === UTILS.ROLE.ADMIN,
  };
}

export function useGetAuthFromStore() {
  const { role, setAuth } = useAuth();
  useEffect(() => {
    request();
  }, []);

  async function request() {
    const resp = await permanentStorage.getDetails(permanentStorage.userDetail);
    if (resp) {
      setAuth(resp);
    }
  }

  return { role };
}

export default useAuth;
