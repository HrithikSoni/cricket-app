import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import useApi from "../../hooks/useApi";
import useTimer from "../../hooks/useTimer";
import UTILS from "../../utils";
import AppText from "../text/AppText";
import OTPInputBox from "./OTPInputBox";
import useRTKQuery from "../../hooks/useRTKQuery";
import authApi from "../../services/authServices/authApi";

const style = UTILS.STYLES;
const colors = UTILS.COLORS;

const PhoneNoInputBox = (props) => {
  const [data, setData] = useState({});
  const updateData = (e) => setData({ ...data, e });
  const [mobileNo, setMobileNo] = useState("");
  const [isVerifyPressed, setIsVerifyPressed] = useState(false);

  const { timer, setTimer, timerRunning, setTimerRunning } = useTimer();

  const { request: sendOtp, isLoading } = useRTKQuery(
    authApi.useSendOtpMutation,
    handleOtpSuccess
  );

  function handleOtpSuccess(e) {
    console.log(e);
  }

  function handleOnChange(e) {
    setMobileNo(e);
    props.onChangeText(e);
  }

  function handleOnVerify() {
    setIsVerifyPressed(true);
    setTimerRunning(true);
    // handleSendOtp();
    sendOtp({ contact: mobileNo });
  }

  function handleOnResend() {
    setTimer(30);
    setTimerRunning(true);
    // handleSendOtp();
    sendOtp({ contact: mobileNo });
  }

  const containerStyle = [
    style.commonStyle,
    styles.container,
    { justifyContent: props?.isVerify ? "space-between" : "flex-start" },
  ];

  const resendTextStyle = [
    styles.verifyText,
    {
      color: timerRunning ? colors.gray2 : colors.themeColor,
    },
  ];

  const codeSentTextStyle = [style.commonTextStyle, { color: colors.gray2 }];

  const mobileNoStyle = [
    style.commonTextStyle,
    { color: colors.black, marginLeft: 5 },
  ];

  return (
    <>
      <View style={containerStyle}>
        <View style={styles.codeAndPhoneNoContainer}>
          <AppText style={style.commonTextStyleNormal}>
            {props?.code || "+91"}
          </AppText>
          <TextInput
            keyboardType="phone-pad"
            key="Mobile No"
            placeholder="Mobile No"
            onChangeText={(e) => handleOnChange(e)}
            placeholderTextColor={UTILS.COLORS.gray2}
            style={styles.textInput}
          />
        </View>
        {props?.isVerify && (
          <>
            {isVerifyPressed ? (
              <TouchableOpacity
                onPress={handleOnResend}
                disabled={timerRunning}
              >
                <AppText style={resendTextStyle}>Resend</AppText>
              </TouchableOpacity>
            ) : (
              mobileNo.length === 10 && (
                <TouchableOpacity onPress={handleOnVerify}>
                  <AppText style={[styles.verifyText]}>Verify</AppText>
                </TouchableOpacity>
              )
            )}
          </>
        )}
      </View>
      {isVerifyPressed && (
        <View style={[styles.otpBox]}>
          <View style={[UTILS.STYLES.rowSpaceBtw]}>
            <View style={[UTILS.STYLES.rowCenter]}>
              <AppText style={codeSentTextStyle}>Code is sent to</AppText>
              <AppText style={mobileNoStyle}>{mobileNo}</AppText>
            </View>
            <Text style={[styles.verifyText]}>0:{timer}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <OTPInputBox {...props} />
          </View>
        </View>
      )}
    </>
  );
};

export default PhoneNoInputBox;

// function useSendOtp(body) {
//   const { request } = useApi({
//     onSuccess: (e) => {},
//     onFail: (e) => {},
//   });

//   async function handleSendOtp() {
//     // const requestConfig = {
//     //   endpoint: AUTH_ENDPOINTS.SEND_OTP,
//     //   body,
//     // };
//     // await request(requestConfig);
//   }
//   return { handleSendOtp };
// }

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  verifyText: {
    fontSize: 17,
    fontWeight: "500",
    color: UTILS.COLORS.themeColor,
  },
  otpBox: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  codeAndPhoneNoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    ...style.commonTextStyleNormal,
    width: "70%",
  },
});
