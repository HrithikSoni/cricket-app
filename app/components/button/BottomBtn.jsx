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
  runContainer: {
    borderWidth: 2,
    borderColor: UTILS.COLORS.themeColor,
    height: 30,
    width: 30,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: UTILS.COLORS.opacity1,
    justifyContent: "center",
    alignItems: "center",
  },

  dataContainer: {
    // height: UTILS.DIMENSIONS.height - 500,
    width: UTILS.DIMENSIONS.width - 50,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
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
  optionsBtn: {
    padding: 14,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: UTILS.COLORS.gray1,
    marginTop: 10,
    borderWidth: 2,
  },
  optionsBtnContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 0 },
  bottomBtnContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
