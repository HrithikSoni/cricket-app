import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import AuthNavigator from "../routes/AuthNavigator";
import AppNavigator from "../routes/AppNavigator";
import Login from "./AuthScreens/Login";

export default function Root() {
const [user, setUser] = useState(true);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
