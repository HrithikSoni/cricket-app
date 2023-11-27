import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OTPTextInput from "react-native-otp-textinput";

import UTILS from "../../utils";

const OTPInputBox = (props) => {

  function handleOtpInput(e){
    props?.onOtpInput(e)
  }

  return (
    <OTPTextInput
      ref={(e) => (onOtpInput = e)}
      handleTextChange={(e) => handleOtpInput(e)}
      tintColor={UTILS.STYLES.colors.themeColor}
    />
  );
};
export default OTPInputBox;

const styles = StyleSheet.create({});
