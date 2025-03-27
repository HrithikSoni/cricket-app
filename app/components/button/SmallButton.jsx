import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import UTILS from "../../utils";

const SmallButton = (props) => {
  const { disabled } = props;
  const buttonPress = () => {
    if (!disabled) {
      () => {};
    }
    props?.onPress();
  };

  let button = {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    height: 40,
    marginTop: 5,
    width: "85%",
    paddingHorizontal: 5,
  };

  let btnText = {
    fontSize: 15,
    fontWeight: "bold",
  };

  return (
    <TouchableOpacity
      style={[
        button,
        {
          opacity: disabled ? 0.6 : 1,
          backgroundColor: props?.bgColor || UTILS.COLORS.themeColor,
        },
      ]}
      onPress={buttonPress}
      disabled={disabled}
    >
      <Text
        style={[btnText, { color: props?.textColor || UTILS.COLORS.gray3 }]}
      >
        {props?.label || "Continue"}
      </Text>
    </TouchableOpacity>
  );
};

export default SmallButton;

const styles = StyleSheet.create({});
