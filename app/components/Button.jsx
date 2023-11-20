import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import UTILS from "../utils";




const Button = ({ title = "Continue", onPress, isLoading, disabled }) => {
  const buttonPress = () => {
    if (!disabled) {
      ()=> {}
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { opacity: disabled ? 0.6 : 1 }
      ]}
      onPress={buttonPress}
      disabled={disabled}
    >
      {isLoading && (
        <ActivityIndicator
          size="small"
          color="white"
          style={{ marginRight: 18 }}
        />
      )}
      <Text style={[styles.btnText]}>{title}</Text>
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
    backgroundColor: UTILS.STYLES.colors.themeColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 20,
    width: 335,
    height: 57
  },
  btnText: {
    color: colors.gray3,
    fontSize: 20,
    fontWeight: "bold",
  }
});
