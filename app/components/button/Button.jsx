import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import UTILS from "../../utils";

const Button = (props) => {
  const { disabled } = props;
  const buttonPress = () => {
    if (!disabled) {
      () => {};
    }
    props?.onButtonPress();
  };

  let button = {
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    borderRadius: 20,
    height: 57,
    marginTop: 5,
    width: "100%",
  };

  let btnText = {
    fontSize: 20,
    fontWeight: "bold",
  };

  if (props.bottom) {
    button = {
      ...button,
      position: "absolute",
      bottom: 20,
      left: (UTILS.DIMENSIONS.width - 360) / 2,
    };
  }

  return (
    <TouchableOpacity
      style={[
        button,
        {
          opacity: disabled ? 0.6 : 1,
          backgroundColor: props?.bgColor || UTILS.COLORS.themeColor,
        },
        props.style,
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

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
