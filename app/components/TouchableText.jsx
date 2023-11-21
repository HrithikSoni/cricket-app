import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import UTILS from "../utils";

const TouchableText = ({ onPress, children }) => {
  return (
    <TouchableOpacity onClick={onPress}>
      <Text style={[styles.underBtnText]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableText;

const styles = StyleSheet.create({
  underBtnText: {
    fontWeight: "bold",
    color: UTILS.STYLES.colors.themeColor
  }
});
