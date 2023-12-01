import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import UTILS from "../../utils";

const Button = (props) => {
  const { disabled } = props;
  const buttonPress = () => {
    if (!disabled) {
      () => {};
    }
    props?.onButtonPress();
  };

  let button = styles.button;
  if (props.bottom) {
    button = {
      ...button,
      position: "absolute",
      bottom: 20,
      left: (UTILS.DIMENSIONS.width - button.minWidth) / 2,
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
      ]}
      onPress={buttonPress}
      disabled={disabled}
    >
      {props?.isLoading && (
        <ActivityIndicator
          size="small"
          color="white"
          style={{ marginRight: 18 }}
        />
      )}
      <Text
        style={[
          styles.btnText,
          { color: props?.textColor || UTILS.COLORS.gray3 },
        ]}
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
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 20,
    height: 57,
    minWidth: 360,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
