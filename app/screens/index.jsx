import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

import AuthNavigator from "../routes/AuthNavigator";
import Login from "./AuthScreens/Login";

export default function Root() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
