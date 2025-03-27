import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import UTILS from "../../utils";

export default function PlusButton({ onPress, style = {} }) {
  return (
    <TouchableOpacity
      style={[UTILS.STYLES.squareBtn, styles.btnPosition, style]}
      onPress={onPress}
    >
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  plus: {
    fontSize: 40,
    color: "white",
    fontWeight: "300",
  },

  btnPosition: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});
