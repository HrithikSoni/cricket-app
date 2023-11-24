import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OTPTextInput from "react-native-otp-textinput";


import UTILS from "../../utils";

const OTPInputBox = () => {
  return (
    <View>
      <OTPTextInput
        ref={(e) => (otpInput = e)}
        tintColor={UTILS.STYLES.colors.themeColor}
      />
    </View>
  );
};

export default OTPInputBox;

const styles = StyleSheet.create({});
