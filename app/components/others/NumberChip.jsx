import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../text/AppText";
import UTILS from "../../utils";

export default function NumberChip({ number, style = {} }) {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.number}>{number}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: UTILS.COLORS.themeColor,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "white",
    fontSize: 10,
  },
});
