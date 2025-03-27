import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OTPTextInput from "react-native-otp-textinput";

import UTILS from "../../utils";

const colors = UTILS.COLORS;
const OTPInputBox = (props) => {

  function handleOtpInput(e){
    props?.onOtpInput(e)
  }

  return (
    <OTPTextInput
      ref={(e) => (onOtpInput = e)}
      handleTextChange={(e) => handleOtpInput(e)}
      tintColor={colors.gray3}
      offTintColor={colors.gray3}
      textInputStyle={[styles.textInputStyle]}
    />
  );
};
export default OTPInputBox;

const styles = StyleSheet.create({
  textInputStyle:{
    backgroundColor: colors.gray3,
    width: 75,
    height:65,
    borderRadius: 15
  }
});
