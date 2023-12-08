import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import Button from "../../components/button/Button";
import OTPInputBox from "../../components/inputs/OTPInputBox";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import useTimer from "../../hooks/useTimer";
import AUTH_ENDPOINTS from "../../services/api/authEndpoints";
import permanentStorage from "../../services/permanentStorage";
import { updateAuth } from "../../services/store/reducers/authReducer";
import UTILS from "../../utils";
import AppText from "../../components/text/AppText";

const Otp = ({ navigation, route }) => {
  const otpInput = useRef({ otp: "" });
  const contact = route.params;

  const { handleOtp } = useOtp({ contact, otp: otpInput.current.otp });
  const { timer, setTimer, timerRunning, setTimerRunning } = useTimer();
  const { handleResendOtp } = useResendOtp({ contact: contact });

  useEffect(() => {
    setTimerRunning(true);
  }, []);

  function onResendOtp() {
    handleResendOtp();
    setTimer(60);
    setTimerRunning(true);
  }

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
      <View style={styles.container}>
        <View style={styles.middleContainer}>
          <OTPInputBox onOtpInput={(e) => (otpInput.current.otp = e)} />
          <Button onButtonPress={handleOtp} />
        </View>
        <View style={styles.lowerContainer}>
          {timer === 0 ? (
            <AppText style={styles.otpTimerText}>0:00</AppText>
          ) : (
            <AppText style={styles.otpTimerText}>0:{timer}</AppText>
          )}
          <View style={styles.resendOtpContainer}>
            <AppText style={styles.bottomText}>Didn't receive code?</AppText>
            <TouchableOpacity onPress={onResendOtp} disabled={timerRunning}>
              <AppText style={[styles.bottomText, resendTextStyle]}>
                Resend
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ParentWrapperWithBG>
  );
};

export default Otp;

function useOtp(body) {
  const dispatch = useDispatch();

  const { request } = useApi({
    onSuccess: (e) => {
      permanentStorage.saveDetails(permanentStorage.userDetail, e);
      dispatch(updateAuth(e));
    },
  });
  async function handleOtp() {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.CONFIRM_OTP,
      body,
    };
    await request(requestConfig);
  }

  return { handleOtp };
}

function useResendOtp(body) {
  const { request } = useApi({
    onSuccess: (e) => {},
  });
  async function handleResendOtp() {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.SEND_OTP,
      body,
    };

    await request(requestConfig);
  }

  return { handleResendOtp };
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
