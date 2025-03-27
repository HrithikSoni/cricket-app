import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import UTILS from "../../utils";
import AppText from "../text/AppText";
import BoldText from "../text/BoldText";

const dismissBatsman = "dismissBatsman";

export default function OptionsGrid({ headerTitle, data, onGridItemPress }) {
  return (
    <>
      <View style={{ marginTop: 15 }}>
        <BoldText>{headerTitle}</BoldText>
        <View
          style={[
            styles.optionsBtnContainer,
            { flexDirection: "row", flexWrap: "wrap", marginTop: 0 },
          ]}
        >
          {data.map((i, index) => (
            <TouchableOpacity
              key={i.name}
              onPress={() => onGridItemPress(i, index)}
              style={styles.optionsBtn}
            >
              <AppText>{i.name}</AppText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  optionsBtn: {
    padding: 14,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: UTILS.COLORS.gray1,
    // borderWidth: 2,
    marginTop: 10,
  },
  optionsBtnContainer: {
    marginTop: 15,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
});
