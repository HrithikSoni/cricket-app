import { StyleSheet, Text, View } from "react-native";
import React from "react";

import UTILS from "../../utils";
import Icons from "./Icons";
import AppText from "../text/AppText";

const HeaderWithCross = (props) => {
  return (
    <View style={UTILS.STYLES.rowSpaceBtw}>
      <AppText style={styles.header}>{props.header}</AppText>
      <Icons.CrossIcon
        onPress={props.onRequestClose}
        color={UTILS.COLORS.themeColor}
      />
    </View>
  );
};

export default HeaderWithCross;

const styles = StyleSheet.create({
  header: { fontSize: 20, marginVertical: 10, fontWeight: "700" },
});
