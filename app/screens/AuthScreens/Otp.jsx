import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Button from "../../components/button/Button";
import OTPInputBox from "../../components/inputs/OTPInputBox";
import AppText from "../../components/text/AppText";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import useAuth from "../../hooks/useAuth";
import useRTKQuery from "../../hooks/useRtKQuery";
import useTimer from "../../hooks/useTimer";
import authApi from "../../services/authServices/authApi";
import UTILS from "../../utils";

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
      description={`Code is sent to ` + contact}
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
        <View style={styles.lowerContainer}>
          {timer === 0 ? (
            <AppText style={styles.otpTimerText}>0:00</AppText>
          ) : (
            <AppText style={styles.otpTimerText}>0:{timer}</AppText>
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
  const { saveUserData } = useAuth();

  const { post: handleOtp } = useRTKQuery(
    authApi.useConfirmOtpMutation,
    handleOtpSuccess
  );

  const { post: handleResendOtp } = useRTKQuery(
    authApi.useSendOtpMutation,
    handleResendOtpSuccess
  );

  function handleOtpSuccess(e) {
    saveUserData(e);
  }

  function handleResendOtpSuccess(e) {
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
    marginVertical: 20,
    paddingTop: 50,
    paddingBottom: 20,
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
  resendOtpContainer: { flexDirection: "row", gap: 5 },
  otpTimerText: {
    color: UTILS.COLORS.themeColor,
    fontSize: 20,
    fontWeight: "bold",
  },
});
