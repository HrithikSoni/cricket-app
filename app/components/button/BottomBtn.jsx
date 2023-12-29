import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import UTILS from "../../utils";
import AppText from "../text/AppText";

export default function BottomBtn(props) {
  return (
    <View style={styles.bottomBtnContainer}>
      <TouchableOpacity style={styles.cancelBtn} onPress={props.onRequestClose}>
        <AppText style={{ color: UTILS.COLORS.themeColor }}>Cancel</AppText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitBtn} onPress={props.onSubmit}>
        <AppText style={{ color: "white" }}>Submit</AppText>
      </TouchableOpacity>
    </View>
  );
}
export const styles = StyleSheet.create({
  cancelBtn: {
    borderColor: UTILS.COLORS.themeColor,
    borderWidth: 2,
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },

  submitBtn: {
    backgroundColor: UTILS.COLORS.themeColor,
    borderColor: UTILS.COLORS.themeColor,
    borderWidth: 2,
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },

  bottomBtnContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
