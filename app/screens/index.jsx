import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";

import { useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";
import AppNavigator from "../routes/AppNavigator";
import AuthNavigator from "../routes/AuthNavigator";
import permanentStorage from "../services/permanentStorage";

export default function Root() {
  const user = false;
  const { role } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    request();
  }, []);

  async function request() {
    await permanentStorage
      .getDetails(permanentStorage.userDetail)
      .then((response) => {
        if (response) {
          dispatch(updateAuth(response));
        }
      })
      .catch((error) => {});
  }

  return (
    // role ? role === ROLE.PLAYER ? <PlayerNavigator /> : <AdminNavigator /> : <AuthNavigator />
    role ? <AppNavigator /> : <AuthNavigator />
    // true ? <AppNavigator /> : <AuthNavigator />
  );
}

const styles = StyleSheet.create({});
