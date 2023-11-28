import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";

import AuthNavigator from "../routes/AuthNavigator";
import AppNavigator from "../routes/AppNavigator";
import Login from "./AuthScreens/Login";
import useAuth from "../hooks/useAuth";
import { get, userDetail } from "../services/permanentStorage";
import { useDispatch } from "react-redux";
import ROLE from "../utils/enum/role";

export default function Root() {
const {role, token} = useAuth();
const dispatch = useDispatch();

// console.log(token, 'rolllllllllllllllllllllllllllllllllle');

useEffect(() => {
  request();
}, []);

function request() {
  get(userDetail)
    .then((response) => {
      if (response) {
        dispatch(updateAuth(response));
        // console.log(response, 'lllllllll');
      }
    })
    .catch((error) => {
      console.warn(error.response, 'error from screen index screen');
    })
}

  return (
      // role ? role === ROLE.PLAYER ? <PlayerNavigator /> : <AdminNavigator /> : <AuthNavigator />
      role ? <AppNavigator /> : <AuthNavigator />
  );
}

const styles = StyleSheet.create({});
