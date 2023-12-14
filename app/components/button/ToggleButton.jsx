import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import UTILS from "../../utils";
import Icons from "../others/Icons";
import AppText from "../text/AppText";

const style = UTILS.STYLES;

const ToggleButton = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.option1);

  const text = {
    color: selectedOption ? UTILS.COLORS.black : UTILS.COLORS.gray2,
  };

  function handleOnPress() {
    const newSelectedOption =
      selectedOption === props.option1 ? props.option2 : props.option1;
    setSelectedOption(newSelectedOption);
    props?.onToggleSelect(newSelectedOption);
  }

  return (
    <TouchableOpacity
      style={[style.commonStyle, style.rowCenter, styles.container]}
      onPress={handleOnPress}
    >
      <AppText style={[text, style.commonTextStyleNormal]}>
        {selectedOption.label || props.label}
      </AppText>
      <Icons.CheveronIcon />
    </TouchableOpacity>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
});
