import { StyleSheet, Text, View } from "react-native";
import React from "react";

import UTILS from "../../utils";
import Icons from "./Icons";
import AppText from "../text/AppText";

const BottomSheetHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 20 }} />
      <AppText style={styles.header}>{props.header}</AppText>
      <Icons.CrossIcon
        onPress={props.onRequestClose}
        color={UTILS.COLORS.themeColor}
      />
    </View>
  );
};

export default BottomSheetHeader;

const styles = StyleSheet.create({
  header: { fontSize: 20, marginVertical: 10, fontWeight: "700" },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
