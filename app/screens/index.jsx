import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import "react-native-gesture-handler";

import AuthNavigator from "../routes/AuthNavigator";
import AppNavigator from "../routes/AppNavigator";
import Login from "./AuthScreens/Login";
import useAuth from "../hooks/useAuth";

export default function Root() {
const [user, setUser] = useState(false);
const {role} = useAuth();

console.log(role, 'isssssssssssssssssssssssssssssssssrole');

  return (
      user ? <AppNavigator /> : <AuthNavigator />
  );
}

const styles = StyleSheet.create({});
