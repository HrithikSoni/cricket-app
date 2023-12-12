import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UTILS from "../../utils";

export default function TableHeaderContainer({ children }) {
  return <View style={styles.tableHeader}>{children}</View>;
}

const styles = StyleSheet.create({
  tableHeader: {
    backgroundColor: UTILS.COLORS.themeColor,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 7,
  },
});
