import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OTPTextInput from "react-native-otp-textinput";

import UTILS from "../../utils";

const OTPInputBox = ({ onOtpInput }) => {
  return (
    <OTPTextInput
      ref={(e) => (onOtpInput = e)}
      onTextChange={(e) => console.log(e)}
      tintColor={UTILS.COLORS.themeColor}
    />
  );
};
export default OTPInputBox;

const styles = StyleSheet.create({});
