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
      tintColor={UTILS.STYLES.colors.gray3}
      offTintColor={UTILS.STYLES.colors.gray3}
      textInputStyle={[styles.textInputStyle]}
    />
  );
};
export default OTPInputBox;

const styles = StyleSheet.create({
  textInputStyle:{
    backgroundColor: UTILS.STYLES.colors.gray3,
    width: 75,
    height:65,
    borderRadius: 15
  }
});
