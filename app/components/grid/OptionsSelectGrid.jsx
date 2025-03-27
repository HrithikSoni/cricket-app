import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import UTILS from "../../utils";
import AppText from "../text/AppText";
import BoldText from "../text/BoldText";

const dismissBatsman = "dismissBatsman";

export default function OptionsSelectGrid({
  headerTitle,
  data,
  onGridItemPress,
  invalidData = [],
}) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (i, index) => {
    onGridItemPress(i);
    setSelected(index);
  };
  return (
    <View>
      {headerTitle && <BoldText>{headerTitle}</BoldText>}
      <View
        style={[
          styles.optionsBtnContainer,
          { flexDirection: "row", flexWrap: "wrap", marginTop: 0 },
        ]}
      >
        {data.map((i, index) => (
          <TouchBtn key={index} i={i} index={index} />
        ))}
      </View>
    </View>
  );
  function TouchBtn({ i, index }) {
    const invalid = invalidData.includes(index);
    function handlePress() {
      if (invalid) return;
      handleSelect(i, index);
    }

    const backgroundColor =
      selected == index ? UTILS.COLORS.themeColor : UTILS.COLORS.gray1;

    const textColor = invalid
      ? UTILS.COLORS.gray2
      : selected == index
      ? "white"
      : "black";
    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.optionsBtn,
          {
            backgroundColor,
          },
        ]}
      >
        <AppText style={{ color: textColor }}>{i.name}</AppText>
      </TouchableOpacity>
    );
  }
}

export const styles = StyleSheet.create({
  optionsBtn: {
    padding: 14,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: UTILS.COLORS.gray1,
    marginTop: 10,
    // borderWidth: 2,
  },
  optionsBtnContainer: {
    marginTop: 15,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
});
