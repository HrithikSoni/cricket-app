import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import "react-native-gesture-handler";

import AuthNavigator from "../routes/AuthNavigator";
import AppNavigator from "../routes/AppNavigator";
import Login from "./AuthScreens/Login";

export default function Root() {
  const [user, setUser] = useState(true);

  return true ? <AppNavigator /> : <AuthNavigator />;
}

const styles = StyleSheet.create({});
