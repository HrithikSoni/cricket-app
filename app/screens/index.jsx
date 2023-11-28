import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";

import AuthNavigator from "../routes/AuthNavigator";
import AppNavigator from "../routes/AppNavigator";
import Login from "./AuthScreens/Login";
import useAuth from "../hooks/useAuth";
import { get, userDetail } from "../services/permanentStorage";
import { useDispatch } from "react-redux";

export default function Root() {
const [user, setUser] = useState(false);
const {role} = useAuth();
const dispatch = useDispatch();

console.log(role, 'rolllllllllllllllllllllllllllllllllle');

useEffect(() => {
  request();
}, []);

function request() {
  get(userDetail)
    .then((response) => {
      if (response) {
        dispatch(updateAuth({response}));
      }
    })
    .catch((error) => {
      console.warn(error.response);
    })
}

  return (
      user ? <AppNavigator /> : <AuthNavigator />
  );
}

const styles = StyleSheet.create({});
