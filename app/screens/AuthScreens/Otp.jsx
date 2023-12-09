import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import Button from "../../components/button/Button";
import OTPInputBox from "../../components/inputs/OTPInputBox";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import useTimer from "../../hooks/useTimer";
import AUTH_ENDPOINTS from "../../services/store/api/authEndpoints";
import permanentStorage from "../../services/permanentStorage";
import { updateAuth } from "../../services/authServices/authReducer";
import UTILS from "../../utils";
import useAuth from "../../hooks/useAuth";
import useRTKQuery from "../../hooks/useRtKQuery";
import authApi from "../../services/authServices/authApi";

const Otp = ({ navigation, route }) => {
  const otpInput = useRef({ otp: "" });

  const contact = route.params;

  const { timer, timerRunning, handleOtp, handleResendOtp } = useOtpService();

  const resendTextStyle = {
    color: timerRunning ? UTILS.COLORS.gray2 : UTILS.COLORS.themeColor,
    fontWeight: "bold",
  };

  return (
    <ParentWrapperWithBG
      title={"OTP verification"}
      discp={`Code is sent to ` + contact}
      navigation={navigation}
      PTTextCon={100}
    >
      <View style={[styles.container]}>
        <View style={[styles.middleContainer]}>
          <View style={{ marginTop: 30 }}>
            <OTPInputBox onOtpInput={(e) => (otpInput.current.otp = e)} />
          </View>
          <Button
            onButtonPress={() =>
              handleOtp({ contact, otp: otpInput.current.otp })
            }
          />
        </View>
        <View style={[styles.lowerContainer]}>
          {timer === 0 ? (
            <Text
              style={{
                color: UTILS.COLORS.themeColor,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              0:00
            </Text>
          ) : (
            <Text
              style={{
                color: UTILS.COLORS.themeColor,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              0:{timer}
            </Text>
          )}
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={[styles.bottomText]}>Didn't receive code?</Text>
            <TouchableOpacity
              onPress={() => handleResendOtp({ contact })}
              disabled={timerRunning}
            >
              <Text style={[styles.bottomText, resendTextStyle]}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ParentWrapperWithBG>
  );
};

export default Otp;

function useOtpService() {
  const { timer, startTimer, timerRunning } = useTimer(10);
  const { setAuth } = useAuth();

  const { post: handleOtp } = useRTKQuery(
    authApi.useConfirmOtpMutation,
    handleOtpSuccess
  );

  // for (let x in authApi) {
  //   console.log(x);
  // }

  const { post: handleResendOtp } = useRTKQuery(
    authApi.useSendOtpMutation,
    handleResendOtpSuccess
  );

  function handleOtpSuccess(e) {
    setAuth(e);
  }

  function handleResendOtpSuccess(e) {
    console.log(e, "success");
    startTimer();
  }

  return {
    timer,
    timerRunning,
    handleOtp,
    handleResendOtp,
  };
}

const styles = StyleSheet.create({
  container: {},
  middleContainer: {
    marginVertical: 30,
    gap: 70,
  },
  lowerContainer: {
    alignItems: "center",
    gap: 100,
    marginTop: 50,
  },
  bottomText: {
    fontSize: 17,
  },
});
