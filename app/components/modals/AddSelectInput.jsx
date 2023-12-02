import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";


import UTILS from "../../utils";
import AppText from "../text/AppText";

export default function AddSelectInput(props) {

  return (
    <View style={[UTILS.STYLES.commonStyle, styles.inputContainer]}>
      <AppText style={styles.label}>{props.label}</AppText>
      <SelectorBtn />
    </View>
  );
  function SelectorBtn() {
    return (
      <>
      <TouchableOpacity style={styles.selectorBtn}>
        <AppText style={{ color: UTILS.COLORS.themeColor }}>Add</AppText>
      </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: UTILS.COLORS.themeColor,
    fontSize: 16,
  },
  selectorBtn: {
    height: 35,
    width: 74,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: UTILS.COLORS.border1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: UTILS.COLORS.background1,
  },
});
