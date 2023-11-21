import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';


import AuthNavigator from "../routes/AuthNavigator";
import Login from "./AuthScreens/Login";

export default function Root() {
//   <NavigationContainer>
//   <AuthNavigator />
// </NavigationContainer>
<Login />
}

const styles = StyleSheet.create({});
