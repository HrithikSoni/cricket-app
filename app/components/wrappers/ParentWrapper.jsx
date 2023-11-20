import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import UTILS from "../../utils";

export default function ParentWrapper(props) {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: UTILS.HELPERS.handlePlatform(0, StatusBar.currentHeight),
  },
});
